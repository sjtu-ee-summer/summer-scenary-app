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
		mvc.perform(get("/users/signup")
				.param("username", "testuser")
				.param("password", "testpassword")
				.param("email", "email@test.test"))
				.andExpect(status().isOk());
		mvc.perform(get("/users/signin")
				.param("username", "testuser")
				.param("password", "testpassword"))
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/signin")
				.param("username", "testuser")
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
		mvc.perform(get("/users/username/testuser").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/users/improvip/1").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		mvc.perform(get("/users/refind")
				.param("email", "email@test.test"))
				.andExpect(status().isOk())
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/refind")
				.param("email", "wrongemail@test.test"))
				.andExpect(status().isOk())
				.andReturn().getResponse().getContentAsString();
		mvc.perform(get("/users/changepassword/1")
				.param("password", "testpassword"))
				.andExpect(status().isOk());
	}

}
