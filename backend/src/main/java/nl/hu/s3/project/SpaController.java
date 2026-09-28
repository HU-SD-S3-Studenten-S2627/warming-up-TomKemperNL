package nl.hu.s3.project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SpaController {

    @GetMapping({"/", "/about", "/pokemon", "/pokemon/{name}"})
    public String spa(){
        return "forward:/index.html";
    }
}
