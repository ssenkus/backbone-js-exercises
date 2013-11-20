<?php

function jsonResponse($param, $print = false, $header = true) {
    if (is_array($param)) {
        $out = array(
            'success' => true
        );

        if (is_array($param['data'])) {
            $out['data'] = $param['data'];
            unset($param['data']);
            $out = array_merge($out, $param);
        } else {
            $out['data'] = $param;
        }
    } else if (is_bool($param)) {
        $out = array(
            'success' => $param
        );
    } else {
        $out = array(
            'success' => false,
            'errors' => array(
                'reason' => $param
            )
        );
    }

    $out = json_encode($out);

    if ($print) {
        if ($header)
            header('Content-type: application/json');

        echo $out;
        return;
    }

    return $out;
}

try {
    $link = new PDO('mysql:host=localhost;dbname=backbonejs', 'root', '');
    $prepExp = $link->prepare('select * from slides');
    $prepExp->execute();
    $result = $prepExp->fetch(PDO::FETCH_ASSOC);
//    $result = stripslashes($result);
} catch (PDOException $ex) {
    print($ex->getMessage());
}



$response = array(
    'data' => $result
);
die(jsonResponse($response));

?>
