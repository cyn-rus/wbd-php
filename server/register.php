<?php
    if (isset($_POST['submit'])) {
        $username = $_REQUEST['inputUsername'];
        $password = $_REQUEST['inputPassword'];
        $email = $_REQUEST['inputEmail'];

        $db = new SQLite3('../db/users.sq3');

        if(!$db) {
            echo $db->lastErrorMsg();
        } else {
            echo "Open database success...\n";
        }

        $sql = "INSERT INTO users VALUES('" . $username . "','" . $password . "','" . $email . "'," . 0 . ')';
        
        echo $sql;
        
        $ret = $db->exec($sql);

        if(!$ret){
            echo $db->lastErrorMsg();
        } else {
            echo "Insert data is success...\n";
        }
    }
?>