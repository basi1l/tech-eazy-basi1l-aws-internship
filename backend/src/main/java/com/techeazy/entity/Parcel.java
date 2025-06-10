package com.techeazy.entity;

public class Parcel {
    private String customerName;
    private String deliveryAddress;
    private String contactNumber;
    private String parcelSize;
    private double weight;
    private String trackingNumber;
    // Getters and Setters
    public String getCustomerName() {
        return customerName;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public String getDeliveryAddress() {
        return deliveryAddress;
    }
    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }
    public String getContactNumber() {
        return contactNumber;
    }
    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
    public String getParcelSize() {
        return parcelSize;
    }
    public void setParcelSize(String parcelSize) {
        this.parcelSize = parcelSize;
    }
    public double getWeight() {
        return weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public String getTrackingNumber() {
        return trackingNumber;
    }
    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }
}

