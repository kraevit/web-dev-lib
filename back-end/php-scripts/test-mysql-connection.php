<?php


function test_mysql_conn($db_name, $db_user, $db_pass) {
    // create new connection to the database
    $connection = new mysqli($db_name, $db_user, $db_pass);

    // check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    echo "Connection to the database is succesfull.";
}

function test_mysql_conn_improved() {
    $mysqli = new mysqli("localhost", "username", "password", "dbname");
    $result = $mysqli->query("SELECT lastname FROM employees");

    // Connection with PDO
    $myPDO = new PDO("mysql:host=localhost;dbname=dbname", "username", "password");
    $result = $myPDO->query("SELECT lastname FROM employees");    

    // With PHP legacy functions
    mysql_connect("localhost", "username", "password");
    mysql_select_db("dbname");
    $result = mysqli_query("SELECT lastname FROM employees");
}
