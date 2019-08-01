package com.example.user;

import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
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
public class UserApplicationTests {

	@Autowired
	private WebApplicationContext context;

	private MockMvc mvc;

	@Before
	public void setup(){
		mvc = MockMvcBuilders.webAppContextSetup(context).build();
	}


	@WithMockUser(roles={"ADMIN"})
	@Test
	public void insertBook() throws  Exception {
		mvc.perform(get("/users/username/test"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testuse")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "999")
				.param("sex", "male"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testuse1111")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "9999")
				.param("sex", "male"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testusehhhh")
				.param("password", "testpasswor")
				.param("email", "email@test.teslllll")
				.param("phone", "999")
				.param("sex", "male"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testuse")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "999")
				.param("sex", "male"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signin")
				.param("username", "testuse")
				.param("password", "testpasswor"))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/un/signin")
				.param("username", "testuse")
				.param("password", "wrongpassword"))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users").contentType(MediaType.APPLICATION_JSON))
				.andDo(MockMvcResultHandlers.print())
				.andExpect(status().is(404))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/userinfo/1").contentType(MediaType.APPLICATION_JSON)
				.param("sex", "male")
				.param("age", "0")
				.param("address", "hell")
				.param("phone", "999"))
				.andDo(MockMvcResultHandlers.print())
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/id/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/users/username/testuse").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/un/improvip/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/un/improvip/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/un/refindPassword")
				.param("email", "email@test.tes"))
				.andExpect(status().isOk())
				.andReturn().getResponse().getContentAsString();

	}
	@WithMockUser(roles={"ADMIN"})
	@Test
	public void test2() throws Exception{
		mvc.perform(get("/un/refindPassword")
				.param("email", "email@test.tes"))
				.andExpect(status().isOk())
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/changepassword")
				.param("id", "1")
				.param("oldPassword", "testpassword")
				.param("password", "newpassword"))
				.andExpect(status().is(400));
		mvc.perform(get("/admin/alluser"))
				.andExpect(status().isOk());
		mvc.perform(get("/").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

}
