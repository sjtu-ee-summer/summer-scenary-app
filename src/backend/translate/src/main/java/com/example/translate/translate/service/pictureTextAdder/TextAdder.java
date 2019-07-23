package com.example.translate.translate.service.pictureTextAdder;

import com.example.translate.translate.service.TranslatePicture;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.commons.codec.binary.Base64;
import sun.misc.BASE64Encoder;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;

public class TextAdder {

    // test
//    public static void main(String[] args) throws Exception {
//        String json = "{\"orientation\":\"Up\",\"lanFrom\":\"en\",\"textAngle\":\"0.0\",\"errorCode\":\"0\",\"lanTo\":\"zh-CHS\",\"resRegions\":[{\"boundingBox\":\"18,10,228,25\",\"linesCount\":1,\"lineheight\":24,\"context\":\"Convert PDF to WORD\",\"tranContent\":\"将PDF转换为WORD\",\"dir\":\"h\",\"lang\":\"en\"},{\"boundingBox\":\"24,56,33,22\",\"linesCount\":1,\"lineheight\":24,\"context\":\"PDF\",\"tranContent\":\"PDF\",\"dir\":\"h\",\"lang\":\"en\"},{\"boundingBox\":\"157,75,32,41\",\"linesCount\":1,\"lineheight\":41,\"context\":\"w\",\"tranContent\":\"w\",\"dir\":\"h\",\"lang\":\"en\"},{\"boundingBox\":\"15,155,225,28\",\"linesCount\":1,\"lineheight\":24,\"context\":\"Using OfficeSuite 8 App\",\"tranContent\":\"使用OfficeSuite 8应用程序\",\"dir\":\"h\",\"lang\":\"en\"}]}";
//        String pic = "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";
//        System.out.println(main1(json,pic));
//    }

    public static String main(String json, String image) throws Exception {
        JsonArray parsedJSON = processJSON(json);
        String imageToBeProcessed = image;

        for (JsonElement pa : parsedJSON) {
            JsonObject Obj = pa.getAsJsonObject();
            String boundingBox = Obj.get("boundingBox").getAsString();
            String tranContent = Obj.get("tranContent").getAsString();

            String array[] = boundingBox.split(",");
            imageToBeProcessed = processImage(imageToBeProcessed, tranContent, Integer.parseInt(array[0]), Integer.parseInt(array[1]));
        }

//        System.out.println(imageToBeProcessed);

        return imageToBeProcessed;
    }

    // main method to process JSON based on result obtained from API call
    public static JsonArray processJSON(String json) throws IOException {
        JsonObject jsonObject = new JsonParser().parse(json).getAsJsonObject();
        JsonArray recs = jsonObject.getAsJsonArray("resRegions");

//        System.out.println(recs);

        return recs;


    }

    // test
    // get JSON from translate API based on a base64 formatted image input
    public String getJSON(String base64) throws IOException {
        TranslatePicture translatePicture = new TranslatePicture();
        String result = translatePicture.main(base64);
        System.out.println(result);

        return result;
    }

    // main method to process image based on the content required at position x, y. Returns base64 type processed image
    public static String processImage(String base64Image, String content, int x, int y) throws IOException {
        final BufferedImage image = convertStringToBufferedImage(base64Image);

        Graphics g = image.getGraphics();
        g.setFont(g.getFont().deriveFont(20f)); // set font type and size
        g.setColor(Color.RED);
        g.drawString(content, x, y);
        g.dispose();


        // bufferImage->base64
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", outputStream);
        BASE64Encoder encoder = new BASE64Encoder();
        String base64Img = encoder.encode(outputStream.toByteArray());

//        System.out.println(base64Img);

        return base64Img;
    }

    // convert base64 formatted image to BufferedImage type to be processed later
    private static BufferedImage convertStringToBufferedImage(String image) {

        if (image != null) {
            final byte[] imageInByte = Base64.decodeBase64(image.getBytes());
            final InputStream in = new ByteArrayInputStream(imageInByte);
            BufferedImage bImageFromConvert = null;
            try {

                bImageFromConvert = ImageIO.read(in);

                return bImageFromConvert;
            } catch (IOException e) {
                JOptionPane.showMessageDialog(null, "Image conversation error!\nPlease reopen this window.",
                        JOptionPane.MESSAGE_PROPERTY, JOptionPane.WARNING_MESSAGE);
            }
        } else {
            JOptionPane.showMessageDialog(null, "Image cannot be null!",
                    JOptionPane.MESSAGE_PROPERTY, JOptionPane.WARNING_MESSAGE);
        }

        return null;
    }

}
