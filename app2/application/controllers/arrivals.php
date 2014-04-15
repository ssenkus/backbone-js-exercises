<?php

require(APPPATH . '/libraries/REST_Controller.php');

class arrivals extends REST_Controller {

    public function index_get() {

// Initializing curl
        //       $ch = curl_init('http://developer.trimet.org/ws/V1/arrivals/locIDs/2580/appID/5E48DCD7031297B7CBF2F37FD?json=true');
        $ch = curl_init('http://developer.trimet.org/ws/V1/arrivals/?appID=5E48DCD7031297B7CBF2F37FD&locIDs=2580&json=true');
// Configuring curl options
        $options = array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => array('Content-type: application/json'),
                //CURLOPT_POSTFIELDS => $json_string
        );

// Setting curl options
        curl_setopt_array($ch, $options);

// Getting results
        $result = curl_exec($ch); // Getting jSON result string        
        $this->response(($result));
    }

    public function index_post() {
        
    }

}

?>
