package com.example.imgidentify.Service;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonPrimitive;
import org.apache.commons.codec.digest.DigestUtils;
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

import java.io.IOException;
import java.util.*;

public class ImgIdentifyLandmark {

    private static Logger logger = LoggerFactory.getLogger(ImgIdentifyObject.class);

    private static String access_token = "24.89edf5fc2938bce0c9557c210f98c330.2592000.1569075244.282335-16714026";

    public static String main(String file64) throws IOException {


        return ocrtrans(file64);
    }

    /**
     *
     * //@param access_token 应用token
     * @param base64Picture 图片路径
     */
    public static String ocrtrans(String base64Picture) throws IOException {
        /** 图片地标识别接口地址 */
        String url = "https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark";

        /** 构建参数 */
        Map<String,String> params = new HashMap<String,String>();


        params.put("access_token",access_token);
        params.put("image",base64Picture);



        /** 请求图片地标识别 */
        String result = requestForHttp(url,params);

        /** 处理结果 */

        JsonObject jsonObject = new JsonObject();
        JsonParser jsonParser = new JsonParser();
        System.out.println(result);
        jsonObject = (JsonObject)jsonParser.parse(result);
        String end = jsonObject.get("result").toString();

        JsonObject j;
        j = (JsonObject)jsonParser.parse(end);
        String landmark = j.get("landmark").toString();
//        end = end.get("landmark").getAsJsonObject();
        String st = landmark.replace("\"", "");
        if(st==""){
            return "未知地点";
        }
        return st;
//        return result;
    }



    public static String requestForHttp(String url, Map<String,String> params) throws IOException {
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

    public static String proname(String name) throws IOException{
        /** 图片地标识别接口地址 */
        String url = "http://route.showapi.com/268-1";

        /** 构建参数 */
        Map<String,String> params = new HashMap<String,String>();


        params.put("keyword",name);
        params.put("showapi_appid","103804");

        String str = "keyword"+name+"showapi_appid103804f06a794b48154b7381988d4ce6e512b9";
        String sign= DigestUtils.md5Hex(str.getBytes("utf-8"));
        params.put("showapi_sign",sign);


        /** 请求图片地标识别 */
        String result = requestForHttp(url,params);
        System.out.println(result);

        JsonObject jsonObject;
        JsonParser jsonParser = new JsonParser();
        jsonObject = (JsonObject)jsonParser.parse(result);
        String  body = jsonObject.get("showapi_res_body").toString();
        jsonObject = (JsonObject)jsonParser.parse(body);
        JsonObject bean = jsonObject.getAsJsonObject("pagebean");
        JsonArray contentlist = bean.getAsJsonArray("contentlist");
        if(contentlist.size()==0){
            return "未知地点";
        }
        System.out.println(contentlist.toString());
        JsonObject j = contentlist.get(0).getAsJsonObject();
        JsonPrimitive proname = j.getAsJsonPrimitive("proName");
        return proname.toString();
    }
}
