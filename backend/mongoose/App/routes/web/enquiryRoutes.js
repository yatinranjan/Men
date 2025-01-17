let express=require('express');
let enquiryRoutes=express.Router();

app.post('/api/enquiry-insert',enquiryInsert);
app.get('/api/enquiry-list',enquiryList);
app.delete('/api/enquiry-delete/:id',enquiryDelete);
app.put('/api/enquiry-update/:id',enquiryUpdate);

module.exports=enquiryRoutes;