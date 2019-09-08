package com.example.user;

import static org.hamcrest.CoreMatchers.containsString;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
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
	public void generalUserTest() throws  Exception {
		mvc.perform(get("/users/username/test"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testuse")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "999")
				.param("gender", "1"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signin")
				.param("username", "testuse")
				.param("password", "testpasswor"))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/un/signup")
				.param("username", "testuse1111")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "9999")
				.param("gender", "1"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testusehhhh")
				.param("password", "testpasswor")
				.param("email", "email@test.teslllll")
				.param("phone", "999")
				.param("gender", "1"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signup")
				.param("username", "testuse")
				.param("password", "testpasswor")
				.param("email", "email@test.tes")
				.param("phone", "999")
				.param("gender", "1"))
				.andExpect(status().isOk());
		mvc.perform(get("/un/signin")
				.param("username", "testuse")
				.param("password", "wrongpassword"))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users").contentType(MediaType.APPLICATION_JSON))
				.andDo(MockMvcResultHandlers.print())
				.andExpect(status().is(200))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/userinfo/1").contentType(MediaType.APPLICATION_JSON)
				.param("gender", "1")
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

<<<<<<< HEAD
=======
	@WithMockUser(roles={"ADMIN"})
	@Test
	public void insertBook() throws  Exception {

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
				.andExpect(status().is(200))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/userinfo/1").contentType(MediaType.APPLICATION_JSON)
				.param("gender", "1")
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

>>>>>>> 50cd2c7583173e82d163f63a99b6c6c82602e39d
	@WithMockUser(roles={"ADMIN"})
	@Test
	public void generalUserTest2() throws Exception{
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

	@WithMockUser(roles={"ADMIN"})
	@Test
	public void testchangephoto() throws Exception{
		mvc.perform(get("/users/changephoto")
		.param("id","2")
		.param("photo","photo")).andExpect(status().isOk())
				.andExpect(content().string(containsString("photo")));
	}

	@WithMockUser(roles={"ADMIN"})
	@Test
	public void testsignup() throws Exception{
		mvc.perform(get("/un/signup")
				.param("username","testusername4")
				.param("password","testpassword4")
				.param("email","email@test.com4")
				.param("phone","0000000004")
				.param("gender","1")
		).andExpect(status().isOk())
				.andExpect(content().string(containsString("register success")));
	}

	@WithMockUser(roles={"ADMIN"})
	@Test
	public void testchangepassword() throws Exception{
		mvc.perform(get("/users/changepassword")
				.param("id","6")
				.param("oldPassword","testpassword")
				.param("newPassword","newtestpassword")
		).andExpect(status().isOk())
				.andExpect(content().string(containsString("success")));
	}
}
