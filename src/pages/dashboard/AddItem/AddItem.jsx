import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const imageHostingApi = import.meta.env.VITE_IMAGE_TOKEN;

    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingApi}`

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data
                    const newItem = { name, price, category, recipe, image: imgUrl }
                    console.log(newItem);
                }
            })

        // console.log(data)
    };
    return (
        <div className='w-full px-10 '>
            <SectionTitle subHeading="What's New" heading="Add an Item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-100 p-10 rounded-lg space-y-3'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full "
                        {...register("name", { required: true, maxLength: 80 })} />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue='Pick One' className="select select-bordered"  {...register("category", { required: true })}>
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option> Dessert</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input  {...register("price", { required: true, valueAsNumber: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-32" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Item image*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full "  {...register("image", { required: true })} />
                </div>
                <div className=' text-center'>
                    <input type="submit" value="Add Item" className='btn bg-[#d2a35c] mt-5 w-full border-none' />
                </div>
            </form>
        </div>
    );
};

export default AddItem;