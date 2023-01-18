<?php namespace App\Models;

use CodeIgniter\Model;

class DataModel extends Model{

    public function saveData($table = null, $data = null)
    {
        return  $this->db->table($table)->insert($data);
    }

    public function getkk()
    {
        $builder = $this->db->table('data_kk');
        $query   = $builder->get();
        // echo $this->db->getLastQuery();die;

        return  $query->getResult();
    }

    public function isupdate($table = null, $id = null, $data = null)
    {
      $builder = $this->db->table($table);
      $query   = $builder->where('id', $id);
      $query->update($data);
      // echo $this->db->getLastQuery();die;
      return true;
    }

    public function isdelete($table = null, $id = null)
    {
      $builder = $this->db->table($table);
      $builder->where('id', $id);
      $builder->delete();
      return  true;
    }

}
