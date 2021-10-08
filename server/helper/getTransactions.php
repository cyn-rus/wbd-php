<?php
    $found = 0;
    $db = new SQLite3('../../db/doraemonangis.sq3');
    $sql = "SELECT * FROM transactions";
    $result = $db->query($sql);

    $transactions = [];
    while ($row = $result->fetchArray()) {
        // bengong
    }
?>