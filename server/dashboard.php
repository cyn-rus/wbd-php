<?php
    $maxDorayaki = $_REQUEST['max'];
    // echo $maxDorayaki;
    $db = new SQLite3('../db/doraemonangis.sq3');
    $sql = "SELECT dorayakis.dorayaki_name, amount, description, image FROM dorayakis, transactions WHERE dorayakis.dorayaki_name = transactions.dorayaki_name ORDER BY amount DESC LIMIT $maxDorayaki";
    $result = $db->query($sql);

    $popularDorayakis = [];
        while ($row = $result->fetchArray()) {
            $popularDorayakis[] = [
                'name' => $row['dorayaki_name'],
                'amount' => $row['amount'],
                'description' => $row['description'],
                'image' => $row['image'],
            ];
        }
    
    echo json_encode($popularDorayakis);
    echo json_encode([])
?>