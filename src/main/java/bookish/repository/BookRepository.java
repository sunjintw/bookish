package bookish.repository;

import bookish.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by jsun on 6/18/16.
 */
public interface BookRepository extends JpaRepository<Book, Integer> {
}
