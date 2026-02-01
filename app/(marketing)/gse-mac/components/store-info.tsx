/* ============================================
   app/(marketing)/gse-mac/components/StoreInfo.tsx
   STORE INFORMATION SECTION
   ============================================ */

import React from "react";
import { STORE_INFO } from "../config/product";

export default function StoreInfo() {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h3 className="mb-4 text-xl font-bold text-primary-navy">
        📍 Informasi Store
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* LOCATION */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-700">
            {STORE_INFO.location.title}
          </h4>
          <p className="text-gray-600 whitespace-pre-line">
            {STORE_INFO.location.details}
          </p>
        </div>

        {/* OPERATIONAL HOURS */}
        <div>
          <h4 className="mb-2 font-semibold text-gray-700">
            {STORE_INFO.hours.title}
          </h4>
          <p className="text-gray-600 whitespace-pre-line">
            {STORE_INFO.hours.details}
          </p>
        </div>
      </div>
    </div>
  );
}
