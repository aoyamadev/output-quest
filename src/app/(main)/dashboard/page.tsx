import React from "react";
import { Metadata } from "next";
import { getPageMetadata } from "@/config/metadata";
import styles from "./DashboardPage.module.css";
import * as Dashboard from "@/features/dashboard/components";

export const metadata: Metadata = getPageMetadata("dashboard");

const DashboardPage = () => {
  return (
    <>
      <h1 className={`${styles["dashboard-title"]}`}>ダッシュボード</h1>
      <div className={styles["dashboard-content-wrapper"]}>
        <Dashboard.DashboardContent />
      </div>
    </>
  );
};

export default DashboardPage;
