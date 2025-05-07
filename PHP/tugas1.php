<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Penilaian Ujian</title>
</head>
<body>
    <h2>Form Penilaian Ujian</h2>
    <form action="" method="POST">
        <label for="nama">Nama:</label>
        <input type="text" name="nama" required><br><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br><br>

        <label for="nilai">Nilai Ujian:</label>
        <input type="number" name="nilai" required><br><br>

        <input type="submit" name="submit" value="Kirim">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = htmlspecialchars($_POST["nama"]);
        $email = htmlspecialchars($_POST["email"]);
        $nilai = intval($_POST["nilai"]);

        echo "<h3>Hasil Penilaian:</h3>";
        echo "Nama: " . $nama . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Nilai: " . $nilai . "<br>";

        // Struktur kendali untuk menentukan status kelulusan
        if ($nilai > 70) {
            echo "<strong>Status: Lulus ✅</strong>";
        } else {
            echo "<strong>Status: Remedial ❌</strong>";
        }
    }
    ?>
</body>
</html>