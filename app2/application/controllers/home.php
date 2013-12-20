<?php
require(APPPATH.'/libraries/REST_Controller.php');
class home extends REST_Controller {

    public function index_get() {
        $out = array(
            'success' => 'true', 
            'data' => array(
                'a' => 'asd',
                'b' => 'zxc',
                'c' => 'qwe'
        ));
        //var_dump($out);
        $this->response($out);
        // Display all books
    }

    public function index_post() {
        // Create a new book
    }

}

?>
