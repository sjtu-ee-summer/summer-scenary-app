package com.example.user;


import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradeAppPayModel;
import com.alipay.api.request.AlipayTradeAppPayRequest;
import com.alipay.api.response.AlipayTradeAppPayResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class orderinfo {


    @RequestMapping("/un/orderinfo")
    public String order(@RequestParam String price)  {
        // TODO Auto-generated method stub

        String APP_ID="2016101000652722";
        String APP_PRIVATE_KEY="MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCCwYZG74qmV+NRCUahbQYRJ+ZfRZSYCWwEIQNGi0k82DwqqAin6oICmfISXY2zdBMDAyh+agDk/h2A8TUxHLqjkLN770Y4Z+oPDbB3su5DmhjbBAxiePDH+xrFipV3ld5QV2WFs+Q3glaf2rW9t3jKHllpw1F5YxGSzDRkldJgn5FqZr5wwRC9o6QWeKaSX45XNdNuhnkbe82rrvwo+645/EM/Pb6Q9+P1zA//T+3NpBDsgKmmEp9uf9LQbHIf8xDmSLrje3eAUiGYH41Sm+TPB2H4pYV6g9tpd/bso+B/mrLr+KdhiLSs3qqG8UptKA14Lzg6NCqUMvZckMUZ7/2ZAgMBAAECggEAcUpaHHYJ7KxzoU/nKZB71Dt86AkygTSQqVctLl8aeqRkJRVoQoz2TmiyC+WRE+47Vr3SxQz1b3MZfxH+42mf8H48dOJRNiga7SYQQvX+aQZICOOOE3f0L2FKxeOYM3/fmj7PELRXxRyiD2kBVLp15rG7CN8ZZZJHtKhHsOr614nE0GTKXgw3BLnBqexfiSN1E1LHMUmzeyxzCR2o9367WCY9ZAHVC+IlQ8RT/EZxSS0E9QfRXMQdnv8NWKSTuUbAfkL9Qjv/jrzZv/9oNoe5hnOMdsdLm6HRaCyYPAabz3lpkqvlddjbXPgIkDA9kdeK6JWgPfoUhHB0+H4wtKffjQKBgQDldOo3IWvMTH4YARszJLd4Ja9NQWx9cdOZ3XIn3YMXOAOVCK5sNaLXChvT9g32n3NvT8FDSB074jQSoeRMYtO3Ttf5Ob+NEv64rjAhJNRGx6KQ3jTVPJ5AoXOUYr5NL16pX5Bp6ftVFJhrHoWcDQH9OiLNcfvD5LpfA9z34rsAdwKBgQCR4bSVHF4afwUe//aqoHUJhp89xo8BAFAqguK/KcyavuW+Ks4zM1eIr3eXmnduuy31DIL+oqRJINue9x6ZjQ1FuRfqkjeU9CJHmPRuMcGl32iXORt7jEvARexH/Y5Gk2GqA+i0xOtYaxJMspf0Y/nOQcm+SKiPA+G9Eqw7K+gGbwKBgFZJWg5zVftUxJI4UEcyRoA7A6o0sRyXYnBZEyWkqjhgCxDPW/A7V0owdfiGbgfRPHKedlnb04qCbPyYvqZu/5jOYG9LZRojC4DdmCHOnLklN5/sv8d0bTp2vGUPoOqbpqhg1IjPwYDkJtEZgDsHtTjJ1O6XL4siB2fVpxHcxF/PAoGASNOBgBL6U4Xnu5MSxBl4c/n10zQlvd03KBHROpeWYgY80ROzftH5t+3I6TEewHPHPJczagUtuKgjm5dIemV1I8KEUwENqFm8JzwPgldqkfEW2K+UrbfbNTBzBXlqJod68RIkgOHxj2FccFeUDlg+pB4ppcnGBCdu8SG6Q4vmuBcCgYEAmaeVKiUxjZgJAPGmG7czDc7kNfm2jgj2+AqBF15Nr7GWU6TTysxkXUfUqJM2cJmGNYoRBEDU2X6QvnDRED3vfvDURVcmSYLEGVzlkkDVk+fJi01ekQUXjH9so9YjnsREJOLjFombT1ZfB4qY46ETuks0VusFJ7ErCAx4TYoMEik=";
        String ALIPAY_PUBLIC_KEY="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjr+ImrU4Njndx5foqtayWLoZBsn6oSoHMnImUbrlM4mIjHNA5j6ISaUFuXo6ZUR2QdZcaAh6ahQGgXmZxR+oGUAibQ9X6jKU9fCkoMylGdB/pFaS9kji28yOIhE57Oen7nYgWcFhoC3ZG4zIm+HH7scZC07UnYwgAxXYpmZrsU38zhDS48NMuTkuCs2Lu8Ezmye9/ZHhDKvDZs/k6hpgwGCtJ7DWpVa0UU/Z4DyDSH3ee/QlDeqUg9aATqvPLxamQqgK8e5szM7ytD/CPjlWekR5sq1ywT+Z/AEBTCJ79pEpJigp1Z8YgSdEAtcUC48TwUFv6iFoQBkyEmvcuDIW8QIDAQAB";
        //签名方式
        String sign_type="RSA2";
        //编码格式
        String CHARSET="utf-8";
        //正式环境支付宝网关，如果是沙箱环境需更改成https://openapi.alipaydev.com/gateway.do
        String url="https://openapi.alipaydev.com/gateway.do";
        //实例化客户端
        AlipayClient alipayClient = new DefaultAlipayClient(url, APP_ID, APP_PRIVATE_KEY, "json", CHARSET, ALIPAY_PUBLIC_KEY,sign_type);
        //实例化具体API对应的request类,类名称和接口名称对应,当前调用接口名称：alipay.trade.app.pay
        AlipayTradeAppPayRequest request = new AlipayTradeAppPayRequest();
        //SDK已经封装掉了公共参数，这里只需要传入业务参数。以下方法为sdk的model入参方式(model和biz_content同时存在的情况下取biz_content)。
        AlipayTradeAppPayModel model = new AlipayTradeAppPayModel();
        model.setBody("我是测试数据");
        model.setSubject("App支付测试Java");
        //请保证OutTradeNo值每次保证唯一
        Date date = new Date();
        String strDateFormat = "yyyyMMddHHmmss";
        int num = (int) ((Math.random() * 9 + 1) * 10000);
        SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat);
//        return sdf.format(date);
        String re = sdf.format(date)+String.valueOf(num);
        model.setOutTradeNo(re);
        model.setTimeoutExpress("300m");
        model.setTotalAmount(price);
        model.setProductCode("QUICK_MSECURITY_PAY");
        request.setBizModel(model);
        request.setNotifyUrl("商户外网可以访问的异步地址");
        try {
            //这里和普通的接口调用不同，使用的是sdkExecute
            AlipayTradeAppPayResponse response = alipayClient.sdkExecute(request);
            return (response.getBody());//就是orderString 可以直接给客户端请求，无需再做处理。
        } catch (AlipayApiException e) {
            e.printStackTrace();
            return "false";
        }
    }
}
