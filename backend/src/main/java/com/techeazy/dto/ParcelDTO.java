package com.techeazy.dto;

public class ParcelDTO {
    private String customerName;
    private String deliveryAddress;
    private String trackingNumber;

    public ParcelDTO(String customerName, String deliveryAddress, String trackingNumber) {
        this.customerName = customerName;
        this.deliveryAddress = deliveryAddress;
        this.trackingNumber = trackingNumber;
    }

    public String getCustomerName() { return customerName; }
    public String getDeliveryAddress() { return deliveryAddress; }
    public String getTrackingNumber() { return trackingNumber; }
}
