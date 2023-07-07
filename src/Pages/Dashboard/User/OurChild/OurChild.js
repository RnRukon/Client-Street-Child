import React, { useState } from 'react';
import Paginate from '../../../../Components/Pagination/Pagination';
import age from '../../../../Hooks/useAgeCalculation';
import { useGetMeQuery } from '../../../../Redux/features/Auth/UserApi';
import { useGetOrganizationsQuery } from '../../../../Redux/features/Organization/OrganizationApi';
import DashboardNavbar from '../../Dashboard/DashboardNavbar/DashboardNavbar';


const OurChild = () => {


    const [ageForFilterGreaterThan, setAgeForFilterGreaterThan] = useState(0);

    const { data: user } = useGetMeQuery();
    const { data: child } = useGetOrganizationsQuery();


    const childs = child?.result?.find(data => data.email === user?.result?.user?.email);

    const filterChild = childs?.childList?.filter(d => age(new Date(d?.dateOfBirth)) >= Number(ageForFilterGreaterThan))

    console.log(user?.result?.user?.email);





    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(filterChild?.length / itemsPerPage)

    const paginateItem = filterChild?.slice(startIndex, endIndex)


    let arr = Array.apply(null, Array(20)).map((val, idx) => idx + 1);

    return (
        <div className=' container mx-auto py-3'
        >
              <DashboardNavbar pageTitle='Our child' />
            <div className=''>


                <div className=' container mx-auto  pb-24 p-3  '>
                    <h1 className=' font-extrabold  font-serif text-3xl md:text-2xl     py-10 text-center'>Our Child</h1>
                    <div className=''>
                        <div className=' flex justify-end py-4 gap-3'>

                            <p className=' text-xs text-white '>Filter by age (greater than)</p>
                            <select name="age"
                                onChange={(e) => setAgeForFilterGreaterThan(e.target.value)}
                                id="age" className=' w-20 py-1 px-2 rounded-lg'>
                                {
                                    arr.map((d, i) => (
                                        <option key={i} value={i + 1}>{i + 1} Year</option>
                                    ))
                                }

                            </select>


                        </div>
                        <div className=''>
                            <div className=' grid grid-cols-12 gap-5'>


                                {
                                    paginateItem?.map(data => (
                                        <div key={data?._id} className=" col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-4 ">


                                            <div className=' shadow-lg p-5 rounded-3xl grid  gap-2 grid-cols-6 bg-gradient-to-b md:bg-gradient-to-r from-green-100 from-10% via-amber-400 via-30% to-emerald-600 to-90%  shadow-slate-500'>
                                                <div className='col-span-3 md:col-span-2   flex justify-center md:justify-start '>
                                                    <img className=' h-28 w-28 object-cover rounded-full' src={data?.photo} alt="" />
                                                </div>
                                                <div className='col-span-3 md:col-span-4 text-start md:text-start'>
                                                    <h1 className=' text-md font-extrabold text-slate-600'>{data?.name}</h1>
                                                    <p className=' text-xs'> <span className=' font-extrabold'>Date Of Birth:</span> {new Date(data?.dateOfBirth).toDateString()}</p>
                                                    {<p className=' text-xs'> <span className=' font-extrabold'>Age:</span> {age(new Date(data?.dateOfBirth))}</p>}
                                                    {<p className=' text-xs capitalize'> <span className=' font-extrabold'>Gender:</span> {data?.gender}</p>}
                                                    {<p className=' text-xs capitalize '> <span className=' font-extrabold'>Delivery in : {data?.organization}</span></p>}


                                                </div>
                                            </div>


                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    <div className='  flex justify-center pt-10'>
                        <div className="table-filter-info">
                            <Paginate
                                setCurrentPage={setCurrentPage}
                                page={currentPage}
                                count={count}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChild;