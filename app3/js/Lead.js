var states = {
    'US': [
        {val: "", label: "- Please Select -"},
        {val: "AL", label: "Alabama"},
        {val: "AK", label: "Alaska"},
        {val: "AZ", label: "Arizona"},
        {val: "AR", label: "Arkansas"},
        {val: "CA", label: "California"},
        {val: "CO", label: "Colorado"},
        {val: "CT", label: "Connecticut"},
        {val: "DE", label: "Delaware"},
        {val: "DC", label: "District of Columbia"},
        {val: "FL", label: "Florida"},
        {val: "GA", label: "Georgia"},
        {val: "HI", label: "Hawaii"},
        {val: "ID", label: "Idaho"},
        {val: "IL", label: "Illinois"},
        {val: "IN", label: "Indiana"},
        {val: "IA", label: "Iowa"},
        {val: "KS", label: "Kansas"},
        {val: "KY", label: "Kentucky"},
        {val: "LA", label: "Louisiana"},
        {val: "ME", label: "Maine"},
        {val: "MD", label: "Maryland"},
        {val: "MA", label: "Massachusetts"},
        {val: "MI", label: "Michigan"},
        {val: "MN", label: "Minnesota"},
        {val: "MS", label: "Mississippi"},
        {val: "MO", label: "Missouri"},
        {val: "MT", label: "Montana"},
        {val: "NE", label: "Nebraska"},
        {val: "NV", label: "Nevada"},
        {val: "NH", label: "New Hampshire"},
        {val: "NJ", label: "New Jersey"},
        {val: "NM", label: "New Mexico"},
        {val: "NY", label: "New York"},
        {val: "NC", label: "North Carolina"},
        {val: "ND", label: "North Dakota"},
        {val: "OH", label: "Ohio"},
        {val: "OK", label: "Oklahoma"},
        {val: "OR", label: "Oregon"},
        {val: "PA", label: "Pennsylvania"},
        {val: "RI", label: "Rhode Island"},
        {val: "SC", label: "South Carolina"},
        {val: "SD", label: "South Dakota"},
        {val: "TN", label: "Tennessee"},
        {val: "TX", label: "Texas"},
        {val: "UT", label: "Utah"},
        {val: "VT", label: "Vermont"},
        {val: "VA", label: "Virginia"},
        {val: "WA", label: "Washington"},
        {val: "WV", label: "West Virginia"},
        {val: "WI", label: "Wisconsin"},
        {val: "WY", label: "Wyoming"}
    ],
    'CA': [
        {val: "", label: "- Please Select -"},
        {val: "AB", label: "Alberta"},
        {val: "BC", label: "British Columbia"},
        {val: "MB", label: "Manitoba"},
        {val: "NB", label: "New Brunswick"},
        {val: "NL", label: "Newfoundland"},
        {val: "NT", label: "Northwest Terr."},
        {val: "NS", label: "Nova Scotia"},
        {val: "NU", label: "Nunavut"},
        {val: "ON", label: "Ontario"},
        {val: "PE", label: "Prince Edward Island"},
        {val: "QC", label: "Quebec"},
        {val: "SK", label: "Saskatchewan"},
        {val: "YT", label: "Yukon Terr."}
    ]
};

var Lead = Backbone.Model.extend({
    defaults: {
        success: 'http://www.graphicproducts.com/thankyou.php'
    },
    url: 'form-post.php',
    schema: {
        /* START HIDDEN FIELDS
         *      Legacy hidden input fields, 
         *      these will not be rendered
         *      but are available in the model object
         */

        leadsource: {
            type: 'Hidden',
            title: ''

        },
        sampletype: {
            type: 'Hidden',
            title: ''
        },
        subject: {
            type: 'Hidden',
            title: ''
        },
        type: {
            type: 'Hidden',
            title: ''
        },
        success: {
            type: 'Hidden',
            title: ''
        },
        form_from_http_host: {
            type: 'Hidden',
            title: ''
        },
        from_http_host: {
            type: 'Hidden',
            title: ''
        },
        comments_gp: {
            type: 'Hidden',
            title: ''
        },
        Event_Type: {
            type: 'Hidden',
            title: ''
        },
        // Marketing Tracker code
        // insite_id: {
        //     type: 'Hidden',
        //     title: ''
        // },
        EventSubType: {
            type: 'Hidden',
            title: ''
        },
        captcha: {
            type: 'Hidden',
            title: ''
        },
        // END HIDDEN FIELDS


        first_name: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> First Name',
            validators: ['required']
        },
        last_name: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> Last Name',
            validators: ['required']
        },
        job_title: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> Job Title',
            validators: ['required']
        },
        email: {
            type: 'Text',
            dataType: 'email',
            title: '<span class="required-asterisk" >*</span> Email',
            validators: ['required', 'email']
        },
        phone: {
            type: 'Text',
            title: 'Phone',
            dataType: 'tel'
        },
        company: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> Company',
            validators: ['required']},
        employees: {
            type: 'Select',
            title: '<span class="required-asterisk" >*</span> Employees on Site',
            validators: ['required'],
            options: [
                {val: '', label: '- Please Select -'},
                {val: '1-19', label: '1 - 19 Employees locally'},
                {val: '20-49', label: '20 - 49 Employees locally'},
                {val: '50-99', label: '50 - 99 Employees locally'},
                {val: '100-299', label: '100 - 299 Employees locally'},
                {val: '300-499', label: '300 - 499 Employees locally'},
                {val: '500+', label: '500+ Employees locally'}
            ]
        },
        siccode: {
            type: 'Select',
            title: '<span class="required-asterisk" >*</span> Industry',
            validators: ['required'],
            options: [
                {val: '', label: '- Please Select -'},
                {val: '01-09 - Agriculture, Forestry and Fishing', label: 'Agriculture, Forestry and Fishing'},
                {val: '10-14 - Mining', label: 'Mining'},
                {val: '15-17 - Construction', label: 'Construction'},
                {val: '20-39 - Manufacturing', label: 'Manufacturing'},
                // these next two <option>s are nearly identical (extra space in 1st <option> value)
                // be careful, and consider a reworking of the containing <select> element
                {val: '40-49 - Transportation, Communications, Electric, Gas and Sanitary Services ', label: 'Transportation and Communications'},
                {val: '40-49 - Transportation, Communications, Electric, Gas and Sanitary Services', label: 'Electric, Gas and Sanitary Services'},
                {val: '50-51 - Wholesale Trade', label: 'Wholesale Trade'},
                {val: '52-59 - Retail Trade', label: 'Retail Trade'},
                {val: '60-67 - Finance, Insurance and Real Estate', label: 'Finance, Insurance and Real Estate'},
                {val: '70-89 - Services', label: 'Services'},
                {val: '91-99 - Public Administration', label: 'Public Administration'}
            ]
        },
        address1: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> Company Address',
            validators: ['required']},
        city: {
            type: 'Text',
            title: '<span class="required-asterisk" >*</span> City',
            validators: ['required']},
        country: {
            type: 'Select',
            title: '<span class="required-asterisk" >*</span> Country',
            validators: ['required'],
            options: [
                {val: "", label: "- Please Select -"},
                {val: "US", label: "United States"},
                {val: "CA", label: "Canada"},
                {val: "AF", label: "Afghanistan"},
                {val: "AL", label: "Albania"},
                {val: "DZ", label: "Algeria"},
                {val: "AS", label: "American Samoa"},
                {val: "AD", label: "Andorra"},
                {val: "AO", label: "Angola"},
                {val: "AI", label: "Anguilla"},
                {val: "AQ", label: "Antarctica"},
                {val: "AG", label: "Antigua and Barbuda"},
                {val: "AR", label: "Argentina"},
                {val: "AM", label: "Armenia"},
                {val: "AW", label: "Aruba"},
                {val: "AC", label: "Ascension Island"},
                {val: "AU", label: "Australia"},
                {val: "AT", label: "Austria"},
                {val: "AZ", label: "Azerbaijan"},
                {val: "BS", label: "Bahamas"},
                {val: "BH", label: "Bahrain"},
                {val: "BD", label: "Bangladesh"},
                {val: "BB", label: "Barbados"},
                {val: "BY", label: "Belarus"},
                {val: "BE", label: "Belgium"},
                {val: "BZ", label: "Belize"},
                {val: "BJ", label: "Benin"},
                {val: "BM", label: "Bermuda"},
                {val: "BT", label: "Bhutan"},
                {val: "BO", label: "Bolivia"},
                {val: "BA", label: "Bosnia and Herzegovina"},
                {val: "BW", label: "Botswana"},
                {val: "BV", label: "Bouvet Island"},
                {val: "BR", label: "Brazil"},
                {val: "IO", label: "British Indian Ocean"},
                {val: "BN", label: "Brunei Darussalam"},
                {val: "BG", label: "Bulgaria"},
                {val: "BF", label: "Burkina Faso"},
                {val: "BI", label: "Burundi"},
                {val: "KH", label: "Cambodia"},
                {val: "CM", label: "Cameroon"},
                {val: "CV", label: "Cap Verde"},
                {val: "KY", label: "Cayman Islands"},
                {val: "CF", label: "Central African Rep."},
                {val: "TD", label: "Chad"},
                {val: "CL", label: "Chile"},
                {val: "CN", label: "China"},
                {val: "CX", label: "Christmas Island"},
                {val: "CC", label: "Cocos (Keeling) Is."},
                {val: "CO", label: "Colombia"},
                {val: "KM", label: "Comoros"},
                {val: "CD", label: "Congo, Democratic Rep."},
                {val: "CG", label: "Congo, Republic of"},
                {val: "CK", label: "Cook Islands"},
                {val: "CR", label: "Costa Rica"},
                {val: "CI", label: "Cote d'Ivoire"},
                {val: "HR", label: "Croatia"},
                {val: "CU", label: "Cuba"},
                {val: "CY", label: "Cyprus"},
                {val: "CZ", label: "Czech Republic"},
                {val: "DK", label: "Denmark"},
                {val: "DJ", label: "Djibouti"},
                {val: "DM", label: "Dominica"},
                {val: "DO", label: "Dominican Republic"},
                {val: "TP", label: "East Timor"},
                {val: "EC", label: "Ecuador"},
                {val: "EG", label: "Egypt"},
                {val: "SV", label: "El Salvador"},
                {val: "GQ", label: "Equatorial Guinea"},
                {val: "ER", label: "Eritrea"},
                {val: "EE", label: "Estonia"},
                {val: "ET", label: "Ethiopia"},
                {val: "FK", label: "Falkland Islands"},
                {val: "FO", label: "Faroe Islands"},
                {val: "FJ", label: "Fiji"},
                {val: "FI", label: "Finland"},
                {val: "FR", label: "France"},
                {val: "GF", label: "French Guiana"},
                {val: "PF", label: "French Polynesia"},
                {val: "TF", label: "French So. Terr."},
                {val: "GA", label: "Gabon"},
                {val: "GM", label: "Gambia"},
                {val: "GE", label: "Georgia"},
                {val: "DE", label: "Germany"},
                {val: "GH", label: "Ghana"},
                {val: "GI", label: "Gibraltar"},
                {val: "GR", label: "Greece"},
                {val: "GL", label: "Greenland"},
                {val: "GD", label: "Grenada"},
                {val: "GP", label: "Guadeloupe"},
                {val: "GU", label: "Guam"},
                {val: "GT", label: "Guatemala"},
                {val: "GG", label: "Guernsey"},
                {val: "GN", label: "Guinea"},
                {val: "GW", label: "Guinea-Bissau"},
                {val: "GY", label: "Guyana"},
                {val: "HT", label: "Haiti"},
                {val: "HM", label: "Heard & McDonald Is."},
                {val: "VA", label: "Holy See / Vatican"},
                {val: "HN", label: "Honduras"},
                {val: "HK", label: "Hong Kong"},
                {val: "HU", label: "Hungary"},
                {val: "IS", label: "Iceland"},
                {val: "IN", label: "India"},
                {val: "ID", label: "Indonesia"},
                {val: "IR", label: "Iran"},
                {val: "IQ", label: "Iraq"},
                {val: "IE", label: "Ireland"},
                {val: "IM", label: "Isle of Man"},
                {val: "IL", label: "Israel"},
                {val: "IT", label: "Italy"},
                {val: "JM", label: "Jamaica"},
                {val: "JP", label: "Japan"},
                {val: "JE", label: "Jersey"},
                {val: "JO", label: "Jordan"},
                {val: "KZ", label: "Kazakhstan"},
                {val: "KE", label: "Kenya"},
                {val: "KI", label: "Kiribati"},
                {val: "KW", label: "Kuwait"},
                {val: "KG", label: "Kyrgyzstan"},
                {val: "LA", label: "Laos"},
                {val: "LV", label: "Latvia"},
                {val: "LB", label: "Lebanon"},
                {val: "LS", label: "Lesotho"},
                {val: "LR", label: "Liberia"},
                {val: "LY", label: "Libya"},
                {val: "LI", label: "Liechtenstein"},
                {val: "LT", label: "Lithuania"},
                {val: "LU", label: "Luxembourg"},
                {val: "MO", label: "Macau"},
                {val: "MK", label: "Macedonia"},
                {val: "MG", label: "Madagascar"},
                {val: "MW", label: "Malawi"},
                {val: "MY", label: "Malaysia"},
                {val: "MV", label: "Maldives"},
                {val: "ML", label: "Mali"},
                {val: "MT", label: "Malta"},
                {val: "MH", label: "Marshall Islands"},
                {val: "MQ", label: "Martinique"},
                {val: "MR", label: "Mauritania"},
                {val: "MU", label: "Mauritius"},
                {val: "YT", label: "Mayotte"},
                {val: "MX", label: "Mexico"},
                {val: "FM", label: "Micronesia, Fed. Sts."},
                {val: "MD", label: "Moldova"},
                {val: "MC", label: "Monaco"},
                {val: "MN", label: "Mongolia"},
                {val: "MS", label: "Montserrat"},
                {val: "MA", label: "Morocco"},
                {val: "MZ", label: "Mozambique"},
                {val: "MM", label: "Myanmar"},
                {val: "NA", label: "Namibia"},
                {val: "NP", label: "Nepal"},
                {val: "NL", label: "Netherlands"},
                {val: "AN", label: "Netherlands Antilles"},
                {val: "NC", label: "New Caledonia"},
                {val: "NZ", label: "New Zealand"},
                {val: "NI", label: "Nicaragua"},
                {val: "NE", label: "Niger"},
                {val: "NG", label: "Nigeria"},
                {val: "NU", label: "Niue"},
                {val: "NF", label: "Norfolk Island"},
                {val: "MP", label: "Northern Mariana Is."},
                {val: "NO", label: "Norway"},
                {val: "OM", label: "Oman"},
                {val: "PK", label: "Pakistan"},
                {val: "PW", label: "Palau"},
                {val: "PS", label: "Palestinian Terr."},
                {val: "PA", label: "Panama"},
                {val: "PG", label: "Papua New Guinea"},
                {val: "PY", label: "Paraguay"},
                {val: "PE", label: "Peru"},
                {val: "PH", label: "Philippines"},
                {val: "PN", label: "Pitcairn Island"},
                {val: "PL", label: "Poland"},
                {val: "PT", label: "Portugal"},
                {val: "PR", label: "Puerto Rico"},
                {val: "QA", label: "Qatar"},
                {val: "RE", label: "Reunion Island"},
                {val: "RO", label: "Romania"},
                {val: "RU", label: "Russia"},
                {val: "RW", label: "Rwanda"},
                {val: "GS", label: "S. Georgia/S. Sandwich"},
                {val: "KN", label: "St. Kitts & Nevis"},
                {val: "LC", label: "St. Lucia"},
                {val: "VC", label: "St. Vincent & Gren"},
                {val: "SM", label: "San Marino"},
                {val: "ST", label: "Sao Tome & Principe"},
                {val: "SA", label: "Saudi Arabia"},
                {val: "SN", label: "Senegal"},
                {val: "SC", label: "Seychelles"},
                {val: "SL", label: "Sierra Leone"},
                {val: "SG", label: "Singapore"},
                {val: "SK", label: "Slovakia"},
                {val: "SI", label: "Slovenia"},
                {val: "SB", label: "Solomon Islands"},
                {val: "SO", label: "Somalia"},
                {val: "ZA", label: "South Africa"},
                {val: "KR", label: "South Korea"},
                {val: "ES", label: "Spain"},
                {val: "LK", label: "Sri Lanka"},
                {val: "PM", label: "St. Pierre & Miquelon"},
                {val: "SH", label: "St. Helena"},
                {val: "SD", label: "Sudan"},
                {val: "SR", label: "Suriname"},
                {val: "SJ", label: "Svalbard"},
                {val: "SZ", label: "Swaziland"},
                {val: "SE", label: "Sweden"},
                {val: "CH", label: "Switzerland"},
                {val: "SY", label: "Syria"},
                {val: "TW", label: "Taiwan"},
                {val: "TJ", label: "Tajikistan"},
                {val: "TZ", label: "Tanzania"},
                {val: "TH", label: "Thailand"},
                {val: "TG", label: "Togo"},
                {val: "TK", label: "Tokelau"},
                {val: "TO", label: "Tonga"},
                {val: "TT", label: "Trinidad & Tobago"},
                {val: "TN", label: "Tunisia"},
                {val: "TR", label: "Turkey"},
                {val: "TM", label: "Turkmenistan"},
                {val: "TC", label: "Turks & Caicos Isls."},
                {val: "TV", label: "Tuvalu"},
                {val: "UG", label: "Uganda"},
                {val: "UA", label: "Ukraine"},
                {val: "AE", label: "United Arab Emirates"},
                {val: "UK", label: "United Kingdom"},
                {val: "UY", label: "Uruguay"},
                {val: "UM", label: "US Minor Islands"},
                {val: "UZ", label: "Uzbekistan"},
                {val: "VU", label: "Vanuatu"},
                {val: "VE", label: "Venezuela"},
                {val: "VN", label: "Vietnam"},
                {val: "VI", label: "Virgin Islands (USA)"},
                {val: "VG", label: "Virgin Islands (British)"},
                {val: "WF", label: "Wallis & Futuna Is."},
                {val: "EH", label: "Western Sahara"},
                {val: "WS", label: "Western Samoa"},
                {val: "YE", label: "Yemen"},
                {val: "YU", label: "Yugoslavia"},
                {val: "ZM", label: "Zambia"},
                {val: "ZW", label: "Zimbabwe"}
            ]
        },
        state: {
            type: 'Select',
            title: '<span class="required-asterisk" >*</span> State',
            validators: ['required'],
            // set US to default,
            // able to be switched via country <select>:
            // US: show all states
            // CA: set options to Provinces
            // All others: hide it
            options: states['US']
        },
        zip: {
            type: 'Text',
            title: '<span class="required-asterisk" style="color:red;">*</span> Company Zip Code',
            validators: ['required']
        },
        comments: {
            type: 'TextArea',
            title: 'Questions or Comments?'
        }
    }
}); 