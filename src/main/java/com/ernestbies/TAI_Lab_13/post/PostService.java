package com.ernestbies.TAI_Lab_13.post;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    private static ArrayList<Post> posts = new ArrayList<>();
    private static int idCounter = 0;

    static {
        posts.add(new Post(++idCounter,
                "TAI - Ernest Bieś",
                "https://res.cloudinary.com/practicaldev/image/fetch/s--ZmPcIbAW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dzone.com/storage/temp/12334613-971.jpg",
                "Technologie aplikacji internetowych"));

        posts.add(new Post(++idCounter,
                "Test 1",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 1"));

        posts.add(new Post(++idCounter,
                "Test 2",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 2"));

        posts.add(new Post(++idCounter,
                "Test 3",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 3"));

        posts.add(new Post(++idCounter,
                "Test 4",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 4"));

        posts.add(new Post(++idCounter,
                "Test 5",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 5"));

        posts.add(new Post(++idCounter,
                "Test 6",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 6"));

        posts.add(new Post(++idCounter,
                "Test 7",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 7"));

        posts.add(new Post(++idCounter,
                "Test 8",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 8"));

        posts.add(new Post(++idCounter,
                "Test 9",
                "https://cdn.datafloq.com/cache/blog_pictures/878x531/artificial-intelligence-future-of-programming.jpg",
                "Testowy post nr. 9"));

        posts.add(new Post(++idCounter,
                "title1",
                "http://osnews.pl/wp-content/uploads/2016/06/it-grafika.jpg",
                "Bacon ipsum dolor amet filet mignon drumstick picanha ribeye jerky pork belly cupim tail boudin" +
                        " turducken porchetta kielbasa hamburger pancetta pork chop. Doner meatball kielbasa kevin swine." +
                        " Andouille shankle brisket filet mignon ball tip, cupim chicken swine tail shank t-bone. " +
                        "Drumstick pig tenderloin, chicken pork belly ribeye picanha pork chop alcatra t-bone strip " +
                        "steak salami shankle boudin. Swine porchetta shankle rump spare ribs kielbasa landjaeger " +
                        "brisket sirloin turducken. Shoulder alcatra chuck fatback bacon cow ribeye tail frankfurter " +
                        "chicken ham short ribs pork belly tenderloin kielbasa. Pig capicola short loin, ham hock " +
                        "swine frankfurter doner pork belly pork drumstick ham."));
    }

    public List<Post> getAll() {
        return posts;
    }

    public Post get(int id){
        return posts.get(id);
    }
}
