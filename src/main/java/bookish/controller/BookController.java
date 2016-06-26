package bookish.controller;

import bookish.Model.Book;
import bookish.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by jsun on 6/18/16.
 */
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookRepository repo;

//    @RequestMapping(method = RequestMethod.GET)
//    public List<Book> findBooks() {
//        return repo.findAll();
//    }

    @RequestMapping(method = RequestMethod.POST)
    public Book addBook(@RequestBody Book Book) {
        Book.setId(null);
        return repo.saveAndFlush(Book);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Book updateBook(@RequestBody Book updatedBook, @PathVariable Integer id) {
        updatedBook.setId(id);
        return repo.saveAndFlush(updatedBook);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Book getBook(@PathVariable Integer id) {
        return repo.findOne(id);

    }
    @RequestMapping(method = RequestMethod.GET)
    public Page<Book> getBookByPage(@PageableDefault Pageable pageable){
        return repo.findAll(pageable);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable Integer id) {
        repo.delete(id);
    }

}
