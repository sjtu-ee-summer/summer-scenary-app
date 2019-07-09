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

    public static String main(String file64) throws IOException {

        String appKey = "356a681fd478dcea";
        String appSecret = "MRYTJISyhxTZsYUZgkEBd3LVXyMAsfHX";
        String base64Picture = file64;

        return ocrtrans(appKey,appSecret,base64Picture);
    }

    /**
     *
     * @param appKey 应用ID
     * @param appSecret 应用密钥
     * @param file 图片路径
     */
    public static String ocrtrans(String appKey,String appSecret,String base64Picture) throws IOException {
        /** 图片翻译接口地址 */
        String url = "http://openapi.youdao.com/ocrtransapi";

        /** 构建参数 */
        Map<String,String> params = new HashMap<String,String>();

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
        String result = null;
        String q = base64Picture;
        params.put("q", q);
        sign = md5(appKey + q + salt +appSecret);
        params.put("sign",sign);
        result = requestForHttp(url,params);

        /** 处理结果 */
        System.out.println(result);

        return result;
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