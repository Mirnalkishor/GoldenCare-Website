<script lang="ts">
    const contactPhone = "+91 99556 99982"; 
    const contactEmail = "help.goldencare@gmail.com"; 
    const companyName = "Golden Care";
    const districtCourt = "Punjab District Court"; 

    const billingCycles = [
        {
            cycle: "Weekly",
            term: "Every 7 days",
            condition: "Invoice will be generated, and payment for the same needs to be paid in advance. Non-advance payment will add a penalty of ₹100 daily.",
        },
        {
            cycle: "Monthly",
            term: "Every 30 days",
            condition: "This will be an advance payment service; you will need to pay 30 days payment in advance or else the Weekly cycle will be applied by default.",
        },
    ];
</script>

<section id="payment-policy" class="py-20 md:py-24 bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
        
        <header class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                Payment & Service Policies
            </h1>
            <p class="text-gray-600 text-lg">
                Your trust and transparency are our priorities.
            </p>
        </header>

        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Payment Policy</h2>
        
        <div class="space-y-6 mb-12">
            
            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Applicable Services</h3>
                <p class="text-gray-600">
                    This policy applies to all  {companyName} Services , including  Attendant, Nursing Care, Critical Care, Infant Care, and Rehab Care , except for Physio and short-term intervention services.
                </p>
            </div>

            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Payment Mode</h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Direct Payment to {companyName}: You do not have to pay the caregiver in cash or cheque unless asked by the {companyName} Customer Service team. You will be paying {companyName} directly Online/App or can request a cash/cheque pickup.</li>
                    <li>Accepted Modes: App, Online, NEFT, Cheque, and Cash payments are accepted. We promote and prefer online payment in advance to pay our caregivers in time without hassle.</li>
                    <li>Cash/Cheque Pickup: For Cash/Cheque pickup, the amount should be  more than ₹1500 . Any amount below that should be paid online.</li>
                </ul>
            </div>

            <div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">Taxes</h3>
                <p class="text-gray-600">
                    A  5% tax  will apply to all services provided by {companyName}, in accordance with prevailing tax regulations.
                </p>
            </div>
        </div>

        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Payment Facilities</h2>
        
        <div class="mb-12">
            <h3 class="text-xl font-semibold text-gray-700 mb-4">Billing Cycles</h3>
            <div class="space-y-4">
                {#each billingCycles as cycle}
                    <div class="p-4 border rounded-lg bg-gray-50">
                        <h4 class="text-lg font-bold text-blue-600">{cycle.cycle}: <span class="text-gray-700 font-medium">{cycle.term}</span></h4>
                        <p class="text-sm text-gray-600">{cycle.condition}</p>
                    </div>
                {/each}
            </div>

            <h3 class="text-xl font-semibold text-gray-700 mt-6 mb-4">Surcharge</h3>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Surcharge will be applicable during  festival season  as an add-on incentive for the Caregiver to work.</li>
                <li>The surcharge fee will be informed  two days prior  to any festival.</li>
                <li>It may range from  ₹100 to ₹300 per 12-hour visit , depending on the festival.</li>
            </ul>
        </div>


        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">General Terms on Payments</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-4 ml-4 mb-12">
            <li> Direct Payment:  {companyName} won't be accountable if any amount is paid directly to the Caregiver (CG). The service fee must be paid to {companyName}, and under no circumstances will the amount paid to the CG be adjusted with the service fee.</li>
            <li> Dispute Resolution:  30 days after the overdue date, if payment is not done, the case will be legally filed and the dispute will be resolved in the  {districtCourt} .</li>
            <li> Final Amount:  The service fee only includes payment charges for visits where the attendance of the caregiver has been verified. The mentioned amount is  not the final amount  until confirmation for unverified visits is received from both the customer and caregiver.</li>
        </ul>

        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Refund Policy</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-4 ml-4 mb-12">
            <li> Processing Time:  Once the refund is initiated, your balance amount will be credited to your account within  3 working days .</li>
            <li> Mode:  Refund will be done  only through NEFT .</li>
            <li> Review:  Please review our complete terms and conditions for details.</li>
        </ul>

        <h2 class="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Cancellation Policy</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-4 ml-4 mb-12">
            <li> Cancellation/Reschedule Window:  You may cancel or reschedule any appointment by calling  {contactPhone}  or through the website/mobile app,  no later than 24 hours prior  to the scheduled appointment, else you will be charged  @100%  of the service charge.</li>
            <li> Caregiver Guarantee:  In case of a request for rescheduling, {companyName} does not guarantee that it will be able to provide the same Caregiver again on the rescheduled time.</li>
            <li> {companyName} Right to Cancel:  {companyName} may cancel or reschedule any appointment without prior notice.</li>
            <li> Advance Payment Refund:  In case of cancellation by either party, {companyName} will refund any advance payment made by you to {companyName} for any Services.</li>
        </ul>

    </div>
</section>