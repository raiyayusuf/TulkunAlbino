/* ============================================
   app/admin/users/page.tsx
   USER MANAGEMENT PAGE
   ============================================ */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

/* ============================================
   SAMPLE USERS DATA
   ============================================ */
const SAMPLE_USERS = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi@email.com",
    phone: "+62 812-3456-7890",
    role: "Student",
    status: "active",
    joinDate: "2024-01-15",
    courses: 3,
  },
  {
    id: 2,
    name: "Siti Rahayu",
    email: "siti@email.com",
    phone: "+62 813-4567-8901",
    role: "Student",
    status: "active",
    joinDate: "2024-02-20",
    courses: 2,
  },
  {
    id: 3,
    name: "Andi Wijaya",
    email: "andi@email.com",
    phone: "+62 814-5678-9012",
    role: "Parent",
    status: "inactive",
    joinDate: "2023-11-05",
    courses: 0,
  },
  {
    id: 4,
    name: "Rina Melati",
    email: "rina@email.com",
    phone: "+62 815-6789-0123",
    role: "Teacher",
    status: "active",
    joinDate: "2024-03-10",
    courses: 5,
  },
  {
    id: 5,
    name: "Joko Prasetyo",
    email: "joko@email.com",
    phone: "+62 816-7890-1234",
    role: "Student",
    status: "pending",
    joinDate: "2024-03-25",
    courses: 1,
  },
];

/* ============================================
   USER MANAGEMENT PAGE
   ============================================ */
export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  /* ============================================
     FILTER USERS
     ============================================ */
  const filteredUsers = SAMPLE_USERS.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesStatus =
      selectedStatus === "all" || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

  /* ============================================
     RENDER COMPONENT
     ============================================ */
  return (
    <div className="space-y-6">
      {/* ============================================
          PAGE HEADER
          ============================================ */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary-navy">
            User Management
          </h1>
          <p className="text-gray-600">
            Kelola semua user (siswa, orang tua, pengajar)
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/admin/users/new"
            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-blue-green px-4 py-2 font-medium text-white hover:shadow-lg"
          >
            <Plus className="h-4 w-4" />
            Tambah User
          </Link>
        </div>
      </div>

      {/* ============================================
          FILTERS BAR
          ============================================ */}
      <div className="rounded-xl border border-gray-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* SEARCH */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Search Users
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama atau email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
              />
            </div>
          </div>

          {/* ROLE FILTER */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Filter by Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
            >
              <option value="all">All Roles</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* STATUS FILTER */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Filter by Status
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* ============================================
          USERS TABLE
          ============================================ */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {/* TABLE HEADER */}
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 font-medium text-gray-700">User</div>
            <div className="col-span-3 font-medium text-gray-700">
              Role & Status
            </div>
            <div className="col-span-3 font-medium text-gray-700">Contact</div>
            <div className="col-span-2 font-medium text-gray-700">Actions</div>
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <div key={user.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-12 items-center gap-4">
                {/* USER INFO */}
                <div className="col-span-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-blue-green flex items-center justify-center">
                      <span className="font-bold text-white">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-primary-navy">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        ID: USER-{user.id.toString().padStart(4, "0")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ROLE & STATUS */}
                <div className="col-span-3">
                  <div className="space-y-1">
                    <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                      {user.role}
                    </span>
                    <div>
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-600"
                            : user.status === "pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                        }`}
                      >
                        {user.status === "active"
                          ? "Active"
                          : user.status === "pending"
                            ? "Pending"
                            : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTACT */}
                <div className="col-span-3">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="mr-2 h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="mr-2 h-4 w-4" />
                      {user.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-2 h-4 w-4" />
                      Joined: {user.joinDate}
                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="col-span-2">
                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/admin/users/${user.id}`}
                      className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/admin/users/${user.id}/edit`}
                      className="rounded-lg p-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                      title="Edit User"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button
                      className="rounded-lg p-2 text-gray-600 hover:bg-red-100 hover:text-red-600"
                      title="Delete User"
                      onClick={() => {
                        if (confirm(`Delete user ${user.name}?`)) {
                          // Handle delete
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================
          PAGINATION & SUMMARY
          ============================================ */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:flex-row">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">1-{filteredUsers.length}</span>{" "}
          of <span className="font-medium">{SAMPLE_USERS.length}</span> users
        </div>
        <div className="flex items-center space-x-2">
          <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="rounded-lg bg-primary-blue px-3 py-1 text-sm text-white">
            1
          </button>
          <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
            2
          </button>
          <button className="rounded-lg border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {/* ============================================
          QUICK STATS
          ============================================ */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-primary-navy">128</p>
            </div>
            <div className="rounded-lg bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-primary-navy">94</p>
            </div>
            <div className="rounded-lg bg-green-100 p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Teachers</p>
              <p className="text-2xl font-bold text-primary-navy">12</p>
            </div>
            <div className="rounded-lg bg-purple-100 p-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Approval</p>
              <p className="text-2xl font-bold text-primary-navy">8</p>
            </div>
            <div className="rounded-lg bg-yellow-100 p-3">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
