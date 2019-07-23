package com.example.translate.translate.service;

import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TranslateVoice {
    public static String main(String voiceIn64, String language) throws IOException {
        /** openapiurl */
        String url = "http://openapi.youdao.com/speechtransapi";
        /** 请求参数 */
        Map<String,String> requestParams = new HashMap<String, String>();

        /** 应用参数部分 */
        /** 您的应用ID */
        String appKey = "356a681fd478dcea";
        /** 您的应用密钥，请勿把它和appKey泄露给他人 */
        String appSecret = "MRYTJISyhxTZsYUZgkEBd3LVXyMAsfHX";

        /** 音频参数部分 */
        String q = voiceIn64;
        /** 源语言 */
        String from = "language";
        /** 目标语言 */
        String to = "zh-CHS";
        /** 音频格式：目前支持pcm和wav(pcm编码) */
        String format = "wav";
        /** 音频采样率：目前支持16000和8000 */
        String rate = "16000";
        /** 音频频道 */
        String channel = "1";
        /** 上传类型 */
        String type = "1";
        /** 随机数，自己随机生成，建议时间戳 */
        String salt = String.valueOf(System.currentTimeMillis());
        /** 签名 */
        String sign = md5(appKey + q + salt + appSecret);

        /** 装载参数 */
        requestParams.put("q",q);
        requestParams.put("appKey",appKey);
        requestParams.put("format", format);
        requestParams.put("rate", rate);
        requestParams.put("channel", channel);
        requestParams.put("type", type);
        requestParams.put("salt", salt);
        requestParams.put("from", from);
        requestParams.put("to",to);
        requestParams.put("sign",sign);

        /** 获得请求结果 */
        String result = requestForHttp(url,requestParams);
        System.out.println(result);

        return result;
    }

    /**
     * 生成32位MD5摘要
     * @param string
     * @return
     */
    private static String md5(String string) {
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

    /**
     * 请求获得结果
     * @param url 目标url
     * @param requestParams 请求参数
     * @return 请求结果
     */
    private static String requestForHttp(String url,Map<String,String> requestParams) throws IOException {
        String result = null;
        CloseableHttpClient httpClient = HttpClients.createDefault();
        /**HttpPost*/
        HttpPost httpPost = new HttpPost(url);
        /** 装载参数 */
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        System.out.println(requestParams.keySet().size());
        for(String key:requestParams.keySet()){
            params.add(new BasicNameValuePair(key, requestParams.get(key)));
        }
        httpPost.setEntity(new UrlEncodedFormEntity(params,"UTF-8"));
        /**HttpResponse*/
        CloseableHttpResponse httpResponse = httpClient.execute(httpPost);
        try{
            HttpEntity httpEntity = httpResponse.getEntity();
            result = EntityUtils.toString(httpEntity, "utf-8");
            EntityUtils.consume(httpEntity);
        }finally{
            try{
                if(httpResponse!=null){
                    httpResponse.close();
                }
            }catch(IOException e){
                System.out.println("## release resouce error ##" + e);
            }
        }
        return result;
    }
}