package com.example.translate.service;

import net.coobird.thumbnailator.Thumbnails;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;

/**
 *
 * 图片翻译Api Demo
 * 1.构建参数
 * 2.请求api接口
 * 3.处理结果
 */
public class TranslatePicture {

    private static Logger logger = LoggerFactory.getLogger(TranslatePicture.class);

    public static void main(String[] args) throws IOException {

        String appKey = "356a681fd478dcea";
        String appSecret = "MRYTJISyhxTZsYUZgkEBd3LVXyMAsfHX";
        String filePath = "您的图片地址";
        String tempFilePath = "压缩图片临时地址";
        ocrtrans(appKey,appSecret,filePath,tempFilePath);
    }

    /**
     *
     * @param appKey 应用ID
     * @param appSecret 应用密钥
     * @param filePath 图片路径
     * @param tmpFilePath 压缩后文件临时保存路径
     */
    public static void ocrtrans(String appKey,String appSecret,String filePath,String tmpFilePath) throws IOException {
        /** 图片翻译接口地址 */
        String url = "http://openapi.youdao.com/ocrtransapi";

        /** 构建参数 */
        Map<String,String> params = new HashMap<String,String>();

        File file = new File(filePath);
        if(!file.exists()){
            logger.error("文件不存在");
            return;
        }
        /** 压缩图片 */
        long maxSize = 1 * 1024 * 1024;
        float quality = 0.7f;
        if(file.length() > maxSize){
            /** 设置图片大小和质量 */
            Thumbnails.of(filePath).scale(1f).outputQuality(quality).toFile(new File(tmpFilePath));
            File tmpFile = new File(tmpFilePath);
            filePath = tmpFilePath;
            /** 连续压缩 */
            while(tmpFile.length() > maxSize){
                quality -= 0.2;
                Thumbnails.of(filePath).scale(1f).outputQuality(quality).toFile(tmpFile);
                tmpFile = new File(tmpFilePath);
            }
        }
        System.out.println(file.length());

        String salt = String.valueOf(System.currentTimeMillis());
        String from = "auto";
        String to = "zh-CHS";
        String type = "1";
        String sign = null;
        params.put("appKey",appKey);
        params.put("salt",salt);
        params.put("from",from);
        params.put("to",to);
        params.put("type",type);


        /** 请求图片翻译 */
        File imgFile = new File(filePath);
        String result = null;
        String q = getBase64OfFile(imgFile);
        params.put("q", q);
        sign = md5(appKey + q + salt +appSecret);
        params.put("sign",sign);
        result = requestForHttp(url,params);

        /** 处理结果 */
        System.out.println(result);
    }

    public static String requestForHttp(String url,Map<String,String> params) throws IOException {
        String result = "";

        /** 创建HttpClient */
        CloseableHttpClient httpClient = HttpClients.createDefault();

        /** httpPost */
        HttpPost httpPost = new HttpPost(url);
        List<NameValuePair> paramsList = new ArrayList<NameValuePair>();
        Iterator<Map.Entry<String,String>> it = params.entrySet().iterator();
        while(it.hasNext()){
            Map.Entry<String,String> en = it.next();
            String key = en.getKey();
            String value = en.getValue();
            paramsList.add(new BasicNameValuePair(key,value));
        }
        httpPost.setEntity(new UrlEncodedFormEntity(paramsList,"UTF-8"));
        CloseableHttpResponse httpResponse = httpClient.execute(httpPost);
        try{
            HttpEntity httpEntity = httpResponse.getEntity();
            result = EntityUtils.toString(httpEntity,"UTF-8");
            EntityUtils.consume(httpEntity);
        }finally {
            try{
                if(httpResponse!=null){
                    httpResponse.close();
                }
            }catch(IOException e){
                logger.info("## release resouce error ##" + e);
            }
        }
        return result;
    }


    /**
     * 生成32位MD5摘要
     * @param string
     * @return
     */
    public static String md5(String string) {
        if(string == null){
            return null;
        }
        char hexDigits[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F'};
        byte[] btInput = string.getBytes();
        try{
            /** 获得MD5摘要算法的 MessageDigest 对象 */
            MessageDigest mdInst = MessageDigest.getInstance("MD5");
            /** 使用指定的字节更新摘要 */
            mdInst.update(btInput);
            /** 获得密文 */
            byte[] md = mdInst.digest();
            /** 把密文转换成十六进制的字符串形式 */
            int j = md.length;
            char str[] = new char[j * 2];
            int k = 0;
            for (byte byte0 : md) {
                str[k++] = hexDigits[byte0 >>> 4 & 0xf];
                str[k++] = hexDigits[byte0 & 0xf];
            }
            return new String(str);
        }catch(NoSuchAlgorithmException e){
            return null;
        }
    }

    public static String getBase64OfFile(File file){
        byte[] data = null;
        InputStream in = null;
        try{
            in = new BufferedInputStream(new FileInputStream(file));
            data = new byte[in.available()];
            in.read(data);

        }catch (Exception e){
            e.printStackTrace();
        }
        return com.sun.org.apache.xml.internal.security.utils.Base64.encode(data);
    }
}