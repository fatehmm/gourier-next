import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51Mqg4UAvCKIiIvCf1XU4NEgRcUORFLjQIy8kpb6T3Ldd5EO9BLW2kXkXnYf9ztjnBlcObBbWzpMXktGeQlSib6Qf000ZzU3oXx"
);

export async function POST(user_id: string) {
  try {
    const verificationSession =
      await stripe.identity.verificationSessions.create({
        type: "document",
        metadata: {
          user_id: user_id,
        },

        // Additional options for configuring the verification session:
        options: {
          document: {
            // # Array of strings of allowed identity document types.
            allowed_types: ["driving_license", "passport", "id_card"],

            // # Collect an ID number and perform an ID number check with the
            // # document’s extracted name and date of birth.
            // require_id_number: true,

            // # Disable image uploads, identity document images have to be captured
            // # using the device’s camera.
            require_live_capture: true,

            // # Capture a face image and perform a selfie check comparing a photo
            // # ID and a picture of your user’s face.
            require_matching_selfie: true,
          },
        },
      });

    // Send publishable key and PaymentIntent details to client

    // res.redirect(303, verificationSession.url);
    NextResponse.json(303, verificationSession.url);
  } catch (e) {
    console.log(e);
    NextResponse.json({ message: e.message }, { status: 400 });
  }
}
