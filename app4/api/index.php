<?php

require 'vendor/autoload.php';
$app = new \Slim\Slim(array('debug' => true));

/* Use this to test for Slim's presence */
$app->get('/hello/:name', function ($name) {
            echo "Hello, $name";
        });


/* C.R.U.D. */
/*   Create */
$app->post('/employee/create', function () use($app) {
            $request = $app->request()->post();
            var_dump($request);
            $sql = "INSERT INTO `employees`(`name`, `age`, `description`) VALUES ('{$request['name']}', '{$request['age']}', '{$request['description']}')";
            try {
                $db = getConnection();
                $stmt = $db->query($sql);
                $out = array(
                    'success' => true
                );
                $db = null;
                header('Content-type: application/json');
                echo json_encode($out);
                die();
            } catch (PDOException $e) {

                echo '{"error":{"text":' . $e->getMessage() . '}}';
            }
        });
/*   Read */
$app->get('/employee/', 'getAllEmployees');
/*   Update */

/*   Delete */
$app->delete('/employee/:id', 'deleteEmployeeById');
$app->get('/employee/removeall', 'removeAllEmployees');

/* Utility Operations */
/*     Reset the app with default employees */
$app->get('/employee/reset', 'resetEmployees');

function createNewEmployee() {
    $a = \Slim\Slim::getInstance()->request()->post('name');

    //$out = $request->params('name');
    header('Content-type: application/json');
    echo json_encode($a);
    die();
    $sql = "INSERT INTO `employees`(`name`, `age`, `description`) VALUES ('test','99','test test test')";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $out = array(
            'success' => true
        );
        $db = null;
        header('Content-type: application/json');
        echo json_encode($out);
        die();
    } catch (PDOException $e) {

        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }
}

function deleteEmployeeById($id) {

    $sql = "DELETE FROM `employees` WHERE id = " . $id;
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $db = null;

        die();
    } catch (PDOException $e) {

        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }
}

function getEmployeeById($id) {

    if ($id == 'all') {
        getAllEmployees();
    } else {
        $sql = "select * FROM employees WHERE id = " . $id;
        try {
            $db = getConnection();
            $stmt = $db->query($sql);
            $employee = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $db = null;
            header('Content-type: application/json');
            echo json_encode($employee);
            die();
        } catch (PDOException $e) {

            echo '{"error":{"text":' . $e->getMessage() . '}}';
        }
    }
}

function getAllEmployees() {
    $sql = "select * FROM employees";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $employees = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $db = null;
        header('Content-type: application/json');
        echo json_encode($employees);
        die();
    } catch (PDOException $e) {

        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }
}

function removeAllEmployees() {
    $sql = "TRUNCATE TABLE `employees`";
    try {
        $db = getConnection();
        $stmt = $db->query($sql);
    } catch (PDOException $e) {

        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }
}

function resetEmployees() {
    removeAllEmployees();
    $sql = "INSERT INTO `employees`(`name`, `age`, `description`) " .
            "VALUES " .
            "('steve','29','Web developer living in sunny Portland, OR!')," .
            "('henry','5','Cat living in apartment')," .
            "('numnum','4','Another cat living it up!')";

    try {
        $db = getConnection();
        $stmt = $db->query($sql);
        $out = array(
            'success' => true,
            'operation' => 'reset'
        );

        $db = null;
        header('Content-type: application/json');
        echo json_encode($out);
        die();
    } catch (PDOException $e) {

        echo '{"error":{"text":' . $e->getMessage() . '}}';
    }
}

function getConnection() {
    $dbhost = "127.0.0.1";
    $dbuser = "steve";
    $dbpass = "steve";
    $dbname = "bbrest";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}

$app->run();
?>