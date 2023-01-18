<?php namespace App\Controllers;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\Files\UploadedFile;
use App\Controller\BaseController;

class Jsondata extends \CodeIgniter\Controller
{
	protected $session;
	protected $request;

  function __construct(RequestInterface $request)
  {
      	$this->session = session();
		$this->now = date('Y-m-d H:i:s');
		$this->request = $request;
      	$this->logged = $this->session->get('logged_in');
		$this->data = array(
			'version' => \CodeIgniter\CodeIgniter::CI_VERSION,
			'baseURL' => BASE.'/public',
			// 'baseURL' => BASE,
			'userid' => $this->session->get('user_id'),
			'username' => $this->session->get('user_name'),
			'role' => $this->session->get('user_role'),
		);

	}

		public function submitkepala(){
			try
			{
			$request  	= $this->request;
			$table 	  	= $request->getVar('table');
			$base64		= [];
			foreach ($_FILES as $key => $img) {
				$path = $img["tmp_name"];
				$type = $img['type'];
				$data = file_get_contents($path);
				$base64[$key] = 'data:image/' . $type . ';base64,' . base64_encode($data);
			}			
			
			$model 	  = new \App\Models\DataModel();
			
			$data = [];
			$data['nama']				= $request->getVar('nama');
			$data['nomor_telepon']		= $request->getVar('nomor_telepon');
			$data['pekerjaan']			= $request->getVar('pekerjaan');
			$data['status']				= $request->getVar('status');
			$data['keterangan']			= $request->getVar('keterangan');
			if(isset($base64['ektp'])){
				$data['ektp']				=  $base64['ektp'];
			}
			if(isset($base64['kartu_keluarga'])){
				$data['kk']					= $base64['kartu_keluarga'];
			}
				
			$data['create_date'] 		= $this->now;
			
			if($request->getVar('id')){
				$data['update_date'] 	= $this->now;
				
				$res = $model->isupdate($table, $request->getVar('id') , $data);
			}else{
				$res = $model->saveData($table, $data);
				$id  = $model->insertID();
			}
	
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'terkirim'
			];

			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
			}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
	
		}

		public function delete(){

			$request  = $this->request;
			$table 	  = $request->getVar('table');
			$id 	  	= $request->getVar('id');
	
			$role 		= $this->data['role'];
			$userid		= $this->data['userid'];
	
			$model 	  = new \App\Models\DataModel();
	
			$res = $model->isdelete($table, $id);
			
			$response = [
					'status'   => 'sukses',
					'code'     => '0',
					'data' 	   => 'deleted'
			];
			header('Content-Type: application/json');
			echo json_encode($response);
			exit;
	
		}
		
		public function loadkk()
		{
			try
			{
					$request  	= $this->request;
					$id		 	= $request->getVar('id');
					$role 		= $this->data['role'];
					$userid		= $this->data['userid'];
	
					$model 	  = new \App\Models\DataModel();

	
					$fulldata = [];
					$data = $model->getkk();
					
					if($data){
						$response = [
							'status'   => 'sukses',
							'code'     => '1',
							'data' 	   => $data
						];
					}else{
						$response = [
							'status'   => 'gagal',
							'code'     => '0',
							'data'     => 'tidak ada data',
						];
					}
	
					header('Content-Type: application/json');
					echo json_encode($response);
					exit;
				}
			catch (\Exception $e)
			{
				die($e->getMessage());
			}
		}
}
