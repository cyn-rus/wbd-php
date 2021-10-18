<?php
    $found = 0;
    $dorayaki_id = $_REQUEST['id'];
    $new_stock = $_REQUEST['newStock'];

    $db = new SQLite3('../db/doraemonangis.sq3');
    $sql = "UPDATE dorayakis "
        . "SET stock = " . $new_stock . " "
        . "WHERE dorayaki_id = " . $dorayaki_id . " ";

    $ret = $db->exec($sql);

    if ($ret) {
        echo json_encode(['changed' => 1]);
    } else {
        echo json_encode(['changed' => 0]);
    }
?>