<?php

namespace App\Controllers;

use CodeIgniter\HTTP\RequestInterface;

class View extends \CodeIgniter\Controller
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
			'baseURL' => BASE . '/public',
			// 'baseURL' => BASE,
			'userid' => $this->session->get('user_id'),
			'username' => $this->session->get('user_name'),
			'role' => $this->session->get('user_role'),
			'fullname' => $this->session->get('user_fullname'),
		);

		
	}

	public function index()
	{

		return redirect('dashboard');
	}

	public function login()
	{

		if ($this->logged) {
			return redirect('dashboard');
		} else {
			helper('form');
			helper('url');

			$uri = current_url(true);

			$message = $this->session->getFlashdata('msg');
			
			if($_SERVER['QUERY_STRING']){
				$st = 1;
			}else{
				$st = 0;
			}
			$this->data['register'] = $st;
			
			if ($message) {
				$this->data['message'] = $message;
			}
			return \Twig::instance()->display('auth/login.html', $this->data);
		}
	}

	public function register()
	{
		if ($this->logged) {
			return redirect('dashboard');
		} else {
			helper('form');
			return \Twig::instance()->display('auth/register.html', $this->data);
		}
	}

	public function dashboard()
	{

		if ($this->logged) {
			helper('form');
			$this->data['script'] = $this->data['baseURL'] . '/action-js/admin/index.js';
			return \Twig::instance()->display('admin/index.html', $this->data);
		} else {
			return redirect('login');
		}
	}

	public function survey()
	{

		helper('form');
		$this->data['script'] = $this->data['baseURL'] . '/action-js/admin/survey.js';
		return \Twig::instance()->display('admin/survey/index1.html', $this->data);
	}

	public function tamu()
	{

		helper('form');
		
		$this->data['script'] = $this->data['baseURL'] . '/action-js/admin/tamu.js';
		return \Twig::instance()->display('admin/survey/isibukutamu.html', $this->data);
	}

	public function kepala()
	{
		if ($this->logged) {
			helper('form');
			$this->data['script'] = $this->data['baseURL'] . '/action-js/admin/menu/kepala.js';
			return \Twig::instance()->display('admin/menu/kepala.html', $this->data);
		} else {
			return redirect('login');
		}
	}

	public function bukutamu()
	{
		if ($this->logged) {
			helper('form');
			$this->data['script'] = $this->data['baseURL'] . '/action-js/admin/menu/bukutamu.js';
			return \Twig::instance()->display('admin/menu/bukutamu.html', $this->data);
		} else {
			return redirect('login');
		}
	}

}
