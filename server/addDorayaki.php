<?php
    if (isset($_POST['submit'])) {
        $dorayakiName = $_REQUEST['inputDorayakiName'];
        $dorayakiDescription = $_REQUEST['inputDorayakiDescription'];
        $dorayakiImageTmp = $_REQUEST['inputDorayakiImage'];
        $dorayakiPrice = $_REQUEST['inputDorayakiPrice'];
        $dorayakiStock = $_REQUEST['inputDorayakiStock'];

        $db = new SQLite3('../db/doraemonangis.sq3');

        if(!$db) {
            echo $db->lastErrorMsg();
        } else {
            echo "Open database success...\n";
        }

        $res = $db->query("SELECT COUNT(dorayaki_id) AS dorayaki_id_max FROM dorayakis");
        
        $row = $res->fetchArray();
        $dorayakiId = $row['dorayaki_id_max'];

        $dorayakiImage = "./images/" . $dorayakiImageTmp;

        echo $dorayakiId;

        $sql = "INSERT INTO dorayakis VALUES(". $dorayakiId . ",'" . $dorayakiName . "','" . $dorayakiDescription . "','" . $dorayakiImage . "'," . $dorayakiPrice . "," . $dorayakiStock . ");";
        echo $sql;
        $ret = $db->exec($sql);
    }
?>