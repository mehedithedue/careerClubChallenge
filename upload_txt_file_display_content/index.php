<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Careerclub | Upload txt File and Display Content</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <hr>
                <h3 class="text-center">Upload Only File(.txt) and Display the Content</h3>
                <hr>
                <h4><a href="https://careerclub.net/index.php/challenge/10/Upload+Only+File%28.txt%29+and+Display+the+Content"> Challange Link from careerclub.net</a> </h4>
                <p>Upload Only File(.txt) and Display the Content</p>
                <hr>
                <form action="action.php" method="post" enctype='multipart/form-data' >
                    <div class="form-group">
                        <label>Upload A Text File</label>
                        <input type="file" name="file">
                        <p class="help-block">Please Upload only text file.</p>
                    </div>

                    <button type="submit" class="btn btn-primary">Upload</button>		
                </form>  
            </div>
        </div>
    </div>
</body>
</html>
