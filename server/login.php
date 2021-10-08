<?php
    if (isset($_POST['submit'])) {
        $username = $_REQUEST['inputUsername'];
        $password = $_REQUEST['inputPassword'];
    }

    $found = 0;

    $db = new SQLite3('../db/doraemonangis.sq3');
    $sql = "SELECT * FROM users WHERE username='" . $username . "' AND password='" . $password . "'";
    $result = $db->query($sql);

    while ($row = $result->fetchArray()) {
        $found = 1;
    }

    if ($found == 1) {
        echo "login success";
        $cookie_name = "username";
        $cookie_value = $_REQUEST['inputUsername'];
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
        // $_COOKIE['username'] = $username;
        header("location:../client/pages/dashboard.html");
    } else {
        echo "login fail";
    }

    unset($db);
?>