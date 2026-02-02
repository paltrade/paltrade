<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
define('logo', 'https://www.paltradechem.com/img/logo.png');

require "PHPMailer/vendor/autoload.php";
if (isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
    $secret = '6LeyehAqAAAAALIq5GYALyxZcnVY-l5hp1oUs5VR';
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
    $responseData = json_decode($verifyResponse);

    if ($responseData->success) {
        if (isset($_POST['contact-form']) && !empty($_POST['contact-form'])) {
            $instrast = isset($_POST['interest']) && !empty($_POST['interest']) && is_array($_POST['interest']) ? implode(',', $_POST['interest']) : '';
            $post = ['Name'=>$_POST['name'],
				'Phone'=>$_POST['mobile'],
				'E-mail'=>$_POST['email'],
				'Subject'=>$_POST['subject'],
				'Message'=>$_POST['message']];
            $post = array_filter($post);
            $reult = mail_send("paltradechem.com", "noreply@paltradechem.com", "Message from client", "Pal Trade Chem LLP", "info@paltradechem.com", $post, 'Message from client', "", "");
            echo $reult;
        }else

		if(isset($_POST['career-form']) && !empty($_POST['career-form'])) {
			$instrast = isset($_POST['interest']) && !empty($_POST['interest']) && is_array($_POST['interest']) ? implode(',', $_POST['interest']) : '';
			$post = ['Name'=>$_POST['name'],
				'Phone'=>$_POST['mobile'],
				'E-mail'=>$_POST['email'],
				'Post Name'=>$_POST['post'],
				'Your Resume'=>$_POST['resume'],
				'Additional Details'=>$_POST['subject']];
			$post = array_filter($post);
			$reult = mail_send("paltradechem.com", "noreply@paltradechem.com", "Applying for Jobs", "Pal Trade Chem LLP", "info@paltradechem.com", $post, 'Applying for Jobs',$_FILES["file"]["tmp_name"], $_FILES["file"]["name"]);
            echo $reult;
		}else

		if(isset($_POST['site-enq']) && !empty($_POST['site-enq'])) {
			$instrast = isset($_POST['interest']) && !empty($_POST['interest']) && is_array($_POST['interest']) ? implode(',', $_POST['interest']) : '';
			$post = ['Name'=>$_POST['name'],
				'Phone'=>$_POST['mobile'],
				'E-mail'=>$_POST['email'],
				'Subject'=>$_POST['subject'],
				'Describe'=>$_POST['message']];
			$post = array_filter($post);
			$reult = mail_send("paltradechem.com", "noreply@paltradechem.com", "Enquiry Now", "Pal Trade Chem LLP", "info@paltradechem.com", $post, 'Enquiry Now', "", "");
            echo $reult;
		}

    }
    
    else {
        echo 'Robot verification failed, please try again.';
        exit();
    }
}



function mail_send($host, $form, $subject, $form_name, $to_email, $post_array, $header_title, $file_temp_name, $file_name)
{
    $mail = new PHPMailer();
    $mail->From = "noreply@paltradechem.com";
    $mail->Host = "paltradechem.com";
    $mail->Password = "@NP*Ue8Ds2G[";
    $mail->FromName = $form_name;
    $mail->addAddress($to_email);
    $mail->addAddress("noreply@paltradechem.com");
    $mail->addReplyTo($to_email, "Reply");

    $mail->isHTML(true);

    $mail->Subject = $subject;

    $mail->Body =
    '<html>
    <head>
    <meta charset="utf-8">
    <title>Email Structure</title>
    
    <style>
    .table-b{ border-right:1px solid #efefef; margin:0px 20px 0px 0px;}
    .logo{ padding:15px 0px 11px;}
    .th{ color:#fff; font-size:16px; font-family:Arial, Helvetica, sans-serif; font-weight:bold; padding:10px 10px;}
    .td{ border-top:1px solid #ccc; border-right:1px solid #cccccc; padding:7px 10px; color:#000000; font-size:13px; font-family:Arial, Helvetica, sans-serif; font-weight:bold;}
    .td1{ border-top:1px solid #ccc; padding:7px 10px; color:#000000; font-size:13px; font-family:Arial, Helvetica, sans-serif; font-weight:normal;}
    .ttl{ color:#000000; line-height:30px; font-family:Arial, Helvetica, sans-serif; font-size:14px;}
    .add{ font-size:13px; color:#666666; font-family:Arial, Helvetica, sans-serif; line-height:20px;}
    .top{ border-top:1px dashed #666666;}
    </style>

    </head>

    <body>
    <table width="700" border="0" align="center" cellpadding="0" cellspacing="0" style="border:1px solid #efefef;" >
		<tr>
			<td colspan="6" valign="top">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="25%" height="2" bgcolor="#444444"></td>
						<td width="75%" height="2" bgcolor="#444444"></td>
					</tr>
				</table>
			</td>
		</tr>
		<tr><td colspan="2" align="center" bgcolor="#fff" class="logo"><img src='.logo.' style="max-width: 150px;"></td></tr>
		<tr><td colspan="6" align="center" bgcolor="#291f6e" class="th">'.$header_title.'</td></tr>

		<tr>
			<td colspan="2">
				<table width="700" border="0" align="center" cellpadding="0" cellspacing="0">';
				foreach ($post_array as $k => $val) {
					$mail->Body .=
					'
					<tr>
					<td width="200" class="td">' .
					$k .
					' :</td>
					<td width="500" class="td1">' .
					$val .
					'</td>
					</tr>';
				}
				$mail->Body .= '   
				</table>
			</td>
		</tr>
    </table>
    </body>
    </html>
    ';
    $mail->AltBody = 'This is a plain-text message body';
    if ($file_temp_name != " " || $file_name != " ") {
        $mail->AddAttachment($file_temp_name, $file_name);
    }
    if ($mail->send()) {
        return true;
    } else {
        return "mail is not sent";
    }
}
