package com.example.user.travelnotes;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
public class NoteControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setup(){
        mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }


    @Test
    public void testhello() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/note/hello")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(content().string(containsString("hello")));
    }

    @Test
    public void testbody() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/note/body/2")
                .contentType(MediaType.APPLICATION_JSON).content("{\"asd\":\"asd\"}"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("{\"asd\":\"asd\"}")));
    }

    @Test
    public void testfind() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/note/find")
                .contentType(MediaType.APPLICATION_JSON).param("uid","2"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("{\"asd\":\"asd\"}")));
    }

    @Test
    public void testfindnull() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/note/find")
                .contentType(MediaType.APPLICATION_JSON).param("uid","999"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("no note")));
    }
}