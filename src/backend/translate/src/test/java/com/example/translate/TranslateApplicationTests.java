package com.example.translate;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.assertTrue;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TranslateApplicationTests {

	@Autowired
	private WebApplicationContext context;
	private MockMvc mvc;
	private String testPictureBase64 = "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4bWQFu/q/X++5fROq7m4TPprTSyR6OByPgVR/EbQcmjKO3yT3NlXNVve3lZEWtaGgHOSd+oWb4NaEsuq7dXVl3NUewqGxxtil5ARy5OdlkvSZkebhZIsHsxDK4e8uaPwWf8ARrdGdIVzB/SNr3F3uLG4/NQrdTcqt1hbUl543Hcaf3Hp4BWNY7VQWW2xW22wNgpYs8jBk9Tk7nqcr3IihfnjnFxLnHJKIiIoRERERERERERERERERERERERERERERERERERERERERERERERERERERERERD0RERaxcZQBrOrxnPbyZ9/sflhXlwoI/wCnlkYMjFIw/MlQLitw71DeL1NdLXFTTxkveWGblechgAAIxk8p71ZmgrZUWfR1rttUWmenp2skx0DupHwzhSd11l3rYJrVTxscC5p1HMe7hVl6TjWiKwHHtc9QM+WGL2ejOD+g7se41bf8gUh4xaLrdYUFALfUQxT0krziXOHNcAD09wXs4VaRl0hY5aOpljlqJpjJI+MktPc3GdxthQofcaf9AbSh3v52/wBRP0UwXGdlyqXpaLiAOLHrD23kWT9KPdkzfsexycbc32cY7lKwaOjFSHkvDeEZ15+A8VdA3CLhn2QuVCpIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLjHkjRgLlERCiIiIumNtgu6IowuG7NC5REUoiIiIiIiIiIiIiIiIiIiIiIiIiIiL/2Q==";

	@Before
	public void setup(){
		mvc = MockMvcBuilders.webAppContextSetup(context).build();;
	}

	@WithMockUser(roles={"ADMIN"})
	@Test
	public void testTranslateText() throws Exception {
		mvc.perform(post("/translate/text").contentType(MediaType.APPLICATION_JSON)
				.param("id", "1")
				.param("from", "auto")
				.param("to", "zh-CHS")
				.param("sentence", "a"))
				.andExpect(status().isOk());
	}


	@Test
	public void testTranslatePicture() throws Exception {
		mvc.perform(post("/translate/photo").contentType(MediaType.APPLICATION_JSON)
				.param("id", "1")
				.param("from", "en")
				.param("to", "zh-CHS")
				.param("picture", testPictureBase64))
				.andExpect(status().is(200));
	}

	@Test
	public void testTranslateAudio() throws Exception {
		mvc.perform(post("/translate/voice").contentType(MediaType.APPLICATION_JSON)
				.param("id", "1")
				.param("from", "en")
				.param("to", "zh-CHS")
				.param("voice", "test"))
				.andExpect(status().is(200));
	}

	@Test
	public void testTranslator() throws Exception {
		mvc.perform(post("/translator/getjob").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(post("/translator/setjob").contentType(MediaType.APPLICATION_JSON)
				.param("id", "1")
				.param("text", "translate this"))
				.andExpect(status().isOk());
		mvc.perform(post("/translator/sendresult").contentType(MediaType.APPLICATION_JSON)
				.param("result", "翻译")
				.param("textId", "144")
				.param("translatorId", "1"))
				.andExpect(status().isOk());
		mvc.perform(get("/translator/refresh/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(post("/translator/registertranslator").contentType(MediaType.APPLICATION_JSON)
				.param("name", "hellotest3"))
				.andExpect(status().isOk());
	}

	@Test
	public void testOther() throws Exception {
		mvc.perform(post("/translate/pichit/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(post("/translate/texthis/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(post("/translate/voichis/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

//	@Test
//	public void testSayHello(){
//
//		//Creating a spy instance of the EventLogger here.
//		MyEventLogger logger = Mockito.spy(MyEventLogger.class);
//
//		//Passing the spy instance here to the constructor.
//		Greeting greeting = new Greeting(logger);
//
//		//Telling the spy instance to return true in every case without executing the real method.
//		doReturn(true).when(logger).writeEvent(anyString());
//
//		//Calling the method to be tested.
//		greeting.sayHello("John");
//	}

}