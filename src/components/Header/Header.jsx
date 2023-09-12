import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 mx-4 items-center border-b-2'>
            <h2 className="text-4xl font-bold">React Knowladge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;