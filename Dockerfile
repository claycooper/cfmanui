FROM alpine:latest AS certs
RUN apk add --no-cache ca-certificates

FROM scratch
ARG TARGETPLATFORM
ENV CLOUDFLARE_API_BASEURL=https://api.cloudflare.com/client/v4 \
    PORT=3000 \
    SSL_INSECURE=false \
    PATH="/bin:/usr/bin:/usr/local/bin"
COPY --from=certs /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY bin/$TARGETPLATFORM /bin/cfmanui
ENTRYPOINT ["/bin/cfmanui"]
