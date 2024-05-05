import { Component } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  image = "https://s3-alpha.figma.com/profile/34e29411-e7c6-41aa-aacd-7c5e57238eb2";
  //"https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"; 
  //"https://s3-alpha-sig.figma.com/img/cbba/19ab/7c453e91f0f26c1d76ccd7c38f8865cf?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d0TLN4wCXB2eWDh1MvSTqRiC1FdLQtFberjHRWPKU50cEMJpM8t8rdUqPdpGQjhT2ZNnwmGzCpK5UkUezYAhHbQc08-0NVQCR6yFqQLOGbgx5LMP6KpIWF6ffyYQ1OjzgkwoISQBxdNyPXZLND6agAnP3AeQr4TrvEr1Y3LddNZKdzyhFw4bkLaqLrCIuEZZ-mIHUZCwjN3hC~tgFyTj3C8QKQBhj1aAZtNjX7Z~xQTjASVQgKv-NK8u5RR5BNoXSRjrARxIVjgqRKGn~SdDxqmIGP3iO1khAdOUJ~yJUuOTYpQT7BlM8sdqsey~nr8YkmwoZQU4MzTvE6GUOn~ATQ__"
  user_name = "Ahmed Nasreldeen"
  member_since = "Sept 2018"
  reviews = 1.6;
  email= "an2071497@gmail.com"
  contactnumber="01099401398"
  dateofbirth="01/09/2002"
  products=26
  followers=1900;
  constructor(){
    
  }
}
