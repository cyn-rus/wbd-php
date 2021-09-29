<?php
    if (isset($_POST['submit'])) {
        $username = $_REQUEST['inputUsername'];
        $password = $_REQUEST['inputPassword'];
    }

    $found = 0;

    $db = new SQLite3('../db/users.sq3');
    $sql = "SELECT * FROM users WHERE username='" . $username . "' AND password='" . $password . "'";
    $result = $db->query($sql);

    while ($row = $result->fetchArray()) {
        $found = 1;
    }

    if ($found == 1) {
        echo "login success";
    } else {
        echo "login fail";
    }

    unset($db);
?>