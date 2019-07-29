package com.alipay.config;

public class AlipayConfig {
	// 商户appid
	public static String APPID = "2016101000652722";
	// 私钥 pkcs8格式的
	public static String RSA_PRIVATE_KEY = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCCwYZG74qmV+NRCUahbQYRJ+ZfRZSYCWwEIQNGi0k82DwqqAin6oICmfISXY2zdBMDAyh+agDk/h2A8TUxHLqjkLN770Y4Z+oPDbB3su5DmhjbBAxiePDH+xrFipV3ld5QV2WFs+Q3glaf2rW9t3jKHllpw1F5YxGSzDRkldJgn5FqZr5wwRC9o6QWeKaSX45XNdNuhnkbe82rrvwo+645/EM/Pb6Q9+P1zA//T+3NpBDsgKmmEp9uf9LQbHIf8xDmSLrje3eAUiGYH41Sm+TPB2H4pYV6g9tpd/bso+B/mrLr+KdhiLSs3qqG8UptKA14Lzg6NCqUMvZckMUZ7/2ZAgMBAAECggEAcUpaHHYJ7KxzoU/nKZB71Dt86AkygTSQqVctLl8aeqRkJRVoQoz2TmiyC+WRE+47Vr3SxQz1b3MZfxH+42mf8H48dOJRNiga7SYQQvX+aQZICOOOE3f0L2FKxeOYM3/fmj7PELRXxRyiD2kBVLp15rG7CN8ZZZJHtKhHsOr614nE0GTKXgw3BLnBqexfiSN1E1LHMUmzeyxzCR2o9367WCY9ZAHVC+IlQ8RT/EZxSS0E9QfRXMQdnv8NWKSTuUbAfkL9Qjv/jrzZv/9oNoe5hnOMdsdLm6HRaCyYPAabz3lpkqvlddjbXPgIkDA9kdeK6JWgPfoUhHB0+H4wtKffjQKBgQDldOo3IWvMTH4YARszJLd4Ja9NQWx9cdOZ3XIn3YMXOAOVCK5sNaLXChvT9g32n3NvT8FDSB074jQSoeRMYtO3Ttf5Ob+NEv64rjAhJNRGx6KQ3jTVPJ5AoXOUYr5NL16pX5Bp6ftVFJhrHoWcDQH9OiLNcfvD5LpfA9z34rsAdwKBgQCR4bSVHF4afwUe//aqoHUJhp89xo8BAFAqguK/KcyavuW+Ks4zM1eIr3eXmnduuy31DIL+oqRJINue9x6ZjQ1FuRfqkjeU9CJHmPRuMcGl32iXORt7jEvARexH/Y5Gk2GqA+i0xOtYaxJMspf0Y/nOQcm+SKiPA+G9Eqw7K+gGbwKBgFZJWg5zVftUxJI4UEcyRoA7A6o0sRyXYnBZEyWkqjhgCxDPW/A7V0owdfiGbgfRPHKedlnb04qCbPyYvqZu/5jOYG9LZRojC4DdmCHOnLklN5/sv8d0bTp2vGUPoOqbpqhg1IjPwYDkJtEZgDsHtTjJ1O6XL4siB2fVpxHcxF/PAoGASNOBgBL6U4Xnu5MSxBl4c/n10zQlvd03KBHROpeWYgY80ROzftH5t+3I6TEewHPHPJczagUtuKgjm5dIemV1I8KEUwENqFm8JzwPgldqkfEW2K+UrbfbNTBzBXlqJod68RIkgOHxj2FccFeUDlg+pB4ppcnGBCdu8SG6Q4vmuBcCgYEAmaeVKiUxjZgJAPGmG7czDc7kNfm2jgj2+AqBF15Nr7GWU6TTysxkXUfUqJM2cJmGNYoRBEDU2X6QvnDRED3vfvDURVcmSYLEGVzlkkDVk+fJi01ekQUXjH9so9YjnsREJOLjFombT1ZfB4qY46ETuks0VusFJ7ErCAx4TYoMEik=";
	// 服务器异步通知页面路径 需http://或者https://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = "http://2493s0p911.zicp.vip:15832/alipay.trade.wap.pay-java-utf-8/notify_url.jsp";
	// 页面跳转同步通知页面路径 需http://或者https://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问 商户可以自定义同步跳转地址
	public static String return_url = "http://2493s0p911.zicp.vip:15832/alipay.trade.wap.pay-java-utf-8/return_url.jsp";
	// 请求网关地址
	public static String URL = "https://openapi.alipaydev.com/gateway.do";
	// 编码
	public static String CHARSET = "UTF-8";
	// 返回格式
	public static String FORMAT = "json";
	// 支付宝公钥
	public static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjr+ImrU4Njndx5foqtayWLoZBsn6oSoHMnImUbrlM4mIjHNA5j6ISaUFuXo6ZUR2QdZcaAh6ahQGgXmZxR+oGUAibQ9X6jKU9fCkoMylGdB/pFaS9kji28yOIhE57Oen7nYgWcFhoC3ZG4zIm+HH7scZC07UnYwgAxXYpmZrsU38zhDS48NMuTkuCs2Lu8Ezmye9/ZHhDKvDZs/k6hpgwGCtJ7DWpVa0UU/Z4DyDSH3ee/QlDeqUg9aATqvPLxamQqgK8e5szM7ytD/CPjlWekR5sq1ywT+Z/AEBTCJ79pEpJigp1Z8YgSdEAtcUC48TwUFv6iFoQBkyEmvcuDIW8QIDAQAB";
	// 日志记录目录
	public static String log_path = "/log";
	// RSA2
	public static String SIGNTYPE = "RSA2";
}
