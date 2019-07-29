<%@page import="com.alipay.api.internal.util.AlipaySignature"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*"%>
<%@ page import="java.util.Map"%>
<%@ page import="com.alipay.config.*"%>
<%@ page import="com.alipay.api.*"%>
<%@ page import="java.io.BufferedReader"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.InputStreamReader"%>
<%@ page import="java.io.PrintWriter"%>
<%@ page import="java.net.URL"%>
<%@ page import="java.net.URLConnection"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Map"%>


<%
	//获取支付宝POST过来反馈信息
	Map<String,String> params = new HashMap<String,String>();
	Map requestParams = request.getParameterMap();
	for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
		String name = (String) iter.next();
		String[] values = (String[]) requestParams.get(name);
		String valueStr = "";
		for (int i = 0; i < values.length; i++) {
			valueStr = (i == values.length - 1) ? valueStr + values[i]
					: valueStr + values[i] + ",";
		}
		//乱码解决，这段代码在出现乱码时使用。如果mysign和sign不相等也可以使用这段代码转化
		//valueStr = new String(valueStr.getBytes("ISO-8859-1"), "gbk");
		params.put(name, valueStr);
	}
	//获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表(以下仅供参考)//
		//商户订单号

		String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
		//支付宝交易号

		String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");

		//交易状态
		String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");

		String body = new String(request.getParameter("body").getBytes("ISO-8859-1"),"UTF-8");

		//获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表(以上仅供参考)//
		//计算得出通知验证结果
		//boolean AlipaySignature.rsaCheckV1(Map<String, String> params, String publicKey, String charset, String sign_type)
		boolean verify_result = AlipaySignature.rsaCheckV1(params, AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.CHARSET, "RSA2");
		
		if(verify_result){//验证成功
			//////////////////////////////////////////////////////////////////////////////////////////
			//请在这里加上商户的业务逻辑程序代码
			
			//——请根据您的业务逻辑来编写程序（以下代码仅作参考）——
			
			if(trade_status.equals("TRADE_FINISHED")){
				
				//判断该笔订单是否在商户网站中已经做过处理
					//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
					//请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
					//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//如果签约的是可退款协议，退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
				//如果没有签约可退款协议，那么付款完成后，支付宝系统发送该交易状态通知。
			} else if (trade_status.equals("TRADE_SUCCESS")){
				System.out.println("this is notify");
				System.out.println(out_trade_no);
				System.out.println(body);
				System.out.println(trade_no);
				System.out.println("this is notify");
				
				
				
				
				String url = "http://localhost:8909/hello/" + body;
				String param = "";
				String result = "";
		        BufferedReader in = null;
		        try {
		            String urlNameString = url; //+ "?" + param;
		            URL realUrl = new URL(urlNameString);
		            // 打开和URL之间的连接
		            URLConnection connection = realUrl.openConnection();
		            // 设置通用的请求属性
		            connection.setRequestProperty("accept", "*/*");
		            connection.setRequestProperty("connection", "Keep-Alive");
		            connection.setRequestProperty("user-agent",
		                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
		            // 建立实际的连接
		            connection.connect();
		            // 获取所有响应头字段
		            Map<String, List<String>> map = connection.getHeaderFields();
		            // 遍历所有的响应头字段
		            for (String key : map.keySet()) {
		                System.out.println(key + "--->" + map.get(key));
		            }
		            // 定义 BufferedReader输入流来读取URL的响应
		            in = new BufferedReader(new InputStreamReader(
		                    connection.getInputStream()));
		            String line;
		            while ((line = in.readLine()) != null) {
		                result += line;
		            }
		        } catch (Exception e) {
		            System.out.println("发送GET请求出现异常！" + e);
		            e.printStackTrace();
		        }
		        // 使用finally块来关闭输入流
		        finally {
		            try {
		                if (in != null) {
		                    in.close();
		                }
		            } catch (Exception e2) {
		                e2.printStackTrace();
		            }
		        }
		        System.out.println(result);
				
				
				//判断该笔订单是否在商户网站中已经做过处理
					//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
					//请务必判断请求时的total_fee、seller_id与通知时获取的total_fee、seller_id为一致的
					//如果有做过处理，不执行商户的业务程序
					
				//注意：
				//如果签约的是可退款协议，那么付款完成后，支付宝系统发送该交易状态通知。
			}

			//——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
			out.clear();
			out.println("success");	//请不要修改或删除

			//////////////////////////////////////////////////////////////////////////////////////////
		}else{//验证失败
			out.println("fail");
		}
%>
