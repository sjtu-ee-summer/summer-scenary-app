package com.example.user.travelnotes;


import com.example.user.travelnotes.entity.Img;
import com.example.user.travelnotes.entity.Note;
import com.example.user.travelnotes.entity.Page;
import com.example.user.travelnotes.repository.ImgRepository;
import com.example.user.travelnotes.repository.NoteRepository;
import com.example.user.travelnotes.repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/travelnotes")
public class notesController {

    @Autowired
    ImgRepository imgRepository;

    @Autowired
    NoteRepository noteRepository;

    @Autowired
    PageRepository pageRepository;



    @RequestMapping("/save")
    public String save(@RequestParam String pictures,
                       @RequestParam String[] text,
                       @RequestParam int pagenumber,
                       @RequestParam int[] template,
                       @RequestParam Long uid,
                       @RequestParam int state) {
//
        String[] pageimg = pictures.split("-");
        Note note = new Note();
        note.setUid(uid);
        note.setState(state);
        note.setPagenumber(pagenumber);
        List<Page> pageSet = new ArrayList<Page>();
        for(int i = 0;i<pagenumber;i++){
            System.out.println(pageimg[i]);
            String[] img = pageimg[i].split(",");
            Page page = new Page();
            page.setText(text[i]);
            page.setTemplate(template[i]);
            List<Img> imgList = new ArrayList<Img>();
            for(int j = 0;j < img.length;j++) {
                Img img1 = new Img();
                img1.setImgbase64(img[j]);
                imgList.add(img1);
                imgRepository.save(img1);
            }
            page.setImgSet(imgList);
            pageRepository.save(page);
            pageSet.add(page);
        }
        note.setPageSet(pageSet);
        noteRepository.save(note);
        return "ok";
    }

    @RequestMapping("/all")
    public Note getall(@RequestParam Long id) {
        return noteRepository.findById(id).get();
    }
}
