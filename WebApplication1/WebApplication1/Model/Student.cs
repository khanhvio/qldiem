namespace WebApplication1.Model
{
    public class Student: BaseObject
    {
        private string _email;
        private string _phone;
        private string _address;

        public string Email { get { return _email; } set { _email = value; } }

        public string Phone { get { return _phone; } set { _phone = value; } }

        public string Address { get { return _address; } set { _address = value; } }

    }
}
