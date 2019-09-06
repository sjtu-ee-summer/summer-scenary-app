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
public class TravelnoteControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;

    @Before
    public void setup(){
        mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void testbody() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/travelnote/save")
                .contentType(MediaType.APPLICATION_JSON).param("note","this is base64").param("state","0")
                .param("title","mytitle").param("uid","2").param("height","100"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("note='this is base64', state=0, uid=2, title='mytitle', height=100")));
    }

    @Test
    public void testuid() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/travelnote/uid/2")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(content().string(containsString("\"note\":\"this is base64\",\"state\":0,\"uid\":2,\"title\":\"mytitle\",\"height\":100")));
    }

    @Test
    public void testall() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/travelnote/all")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()).andExpect(content().string(containsString("\"note\":\"this is base64\",\"state\":0,\"uid\":2,\"title\":\"mytitle\",\"height\":100")));
    }

    @Test
    public void testrelease() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/travelnote/release")
                .contentType(MediaType.APPLICATION_JSON).param("id","9"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("success")));
    }

    @Test
    public void testreleasenull() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/travelnote/release")
                .contentType(MediaType.APPLICATION_JSON).param("id","9999"))
                .andExpect(status().isOk()).andExpect(content().string(containsString("id donot exists")));
    }


}