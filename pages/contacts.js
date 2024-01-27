import React, { useState } from 'react';
import axios from 'axios';
import { contacts_fields } from '@/assets/form-fields/contacts';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Contacts() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/users', data);
      const result = response.data;
      //   console.log('🐙 ~ onSubmit ~ result:', result);
      if (response.status === 201) {
        toast.success(result.message);
        reset();
      }
    } catch (error) {
      //   console.error(error);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-5">
        <div className="space-y-6 mb-[26px]">
          {contacts_fields.map((item) => {
            return (
              <div className="flex flex-col space-y-[6px]" key={item.id}>
                <label className="text-sm" htmlFor={item.id}>
                  {item.label}
                </label>
                <input
                  {...register(item.name)}
                  className="p-4 text-sm border rounded-md bg-purple-950/50"
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </div>
            );
          })}
        </div>

        <button disabled={isLoading} type="submit" className="p-4 rounded-md bg-purple-900 w-full mt-[26px]">
          Submit
        </button>
      </div>
    </form>
  );
}
