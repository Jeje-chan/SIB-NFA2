<?php

    $fruits = ['Pepaya', 'Apel', 'Mangga'];

    echo '--cetak value dari array';
    foreach ($fruits as $fruit){
        echo'<br> nama buah: ' . $fruit;
    };

    echo '<br><br>';
    echo '--cetak key dari array';
    foreach($fruits as $id => $fruit){
        echo '<br>Key array buah: ' . $id;
    }

    echo '<br><br>';
    echo '--cetak key dan value dari array';
    foreach ($fruits as $id => $fruit){
        echo '<br>Buah dengan id: ' . $id . ' adalah buah ' . $fruit;
    }
?>